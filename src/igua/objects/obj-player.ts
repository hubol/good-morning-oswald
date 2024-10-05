import { Color, DisplayObject, Sprite } from "pixi.js";
import { Cutscene, Input, scene } from "../globals";
import { mxnPhysics } from "../mixins/mxn-physics";
import { container } from "../../lib/pixi/container";
import { approachLinear } from "../../lib/math/number";
import { Tx } from "../../assets/textures";
import { mxnBoilPivot } from "../mixins/mxn-boil-pivot";
import { Vector, vnew } from "../../lib/math/vector-type";
import { objFxHeart } from "./fx/obj-fx-heart";
import { Sfx } from "../../assets/sounds";
import { Rng } from "../../lib/math/rng";
import { objFxTear } from "./fx/obj-fx-tear";

const PlayerConsts = {
    WalkingTopSpeed: 3,
    WalkingAcceleration: 0.3,
    WalkingDeceleration: 0.2,
    SkiddingDelta: 0.1,
    JumpSpeed: -3,
    VariableJumpSpeedMaximum: -1.5,
    VariableJumpDelta: -0.115,
    Gravity: 0.15,
};

const [
    txLegsRest,
    txLegsWalk,
    txHead,
    txSclera,
    txFace,
    txPp,
    txHat,
    txLegsSkid,
    txLegsDuck,
    txLegsFall,
    txLegsDuckSkid,
    txHatFacingAway,
] = Tx.Player
    .Layers.split({
        width: 86,
    });

const Colors = {
    Yellow: 0xFFB807,
    Red: 0xC1323E,
};

function objBigPp() {
    let _angle = 0;
    const stroke = Sprite.from(Tx.Player.Penis).at(2, 1).pivoted(3, 2).tinted(Colors.Red);
    const fill = Sprite.from(Tx.Player.Penis).pivoted(3, 2).tinted(Colors.Yellow);

    return container(stroke, fill)
        .merge({
            setAngle(angle: number) {
                _angle = angle;
                stroke.angle = angle;
                fill.angle = angle;
            },
            setVirtualAngle(virtualAngle: number, angle: number) {
                _angle = virtualAngle;
                stroke.angle = angle;
                fill.angle = angle;
            },
            getAngle() {
                return _angle;
            },
            setStrokeDirection(v: Vector) {
                stroke.at(v);
            },
        });
}

function objLegs() {
    let subimage = -1;
    const legsObj = container(
        Sprite.from(txLegsRest),
        Sprite.from(txLegsWalk),
        Sprite.from(txLegsSkid),
        Sprite.from(txLegsDuck),
        Sprite.from(txLegsWalk),
        Sprite.from(txLegsFall),
        Sprite.from(txLegsDuckSkid),
        Sprite.from(txLegsRest),
    );

    const positions = [
        vnew(),
        vnew(),
        vnew(),
        vnew(0, 13),
        vnew(0, -4),
        vnew(),
        vnew(0, 13),
        vnew(),
    ];

    const ppPositions = [
        vnew(),
        vnew(0, 0),
        vnew(),
        vnew(0, 1),
        vnew(),
        vnew(),
        vnew(6, -1),
        vnew(),
    ];

    const bigPpAngles = [
        null,
        -50,
        -25,
        0,
        20,
        -80,
        -40,
        20,
    ];

    const bigPpStrokeDirections: Vector[] = [
        vnew(2, 1),
        vnew(2, 1),
        vnew(2, 0),
        vnew(2, 1),
        vnew(2, 1),
        vnew(2, -2),
        vnew(2, 0),
        vnew(2, 1),
    ];

    const ppObj = Sprite.from(txPp);
    const bigPpObj = objBigPp();

    let delta = 0;

    const c = container(legsObj, ppObj, bigPpObj).merge({
        get subimage() {
            return subimage;
        },
        set subimage(value) {
            if (subimage === value) {
                return;
            }
            subimage = value;
            for (const child of legsObj.children) {
                child.visible = false;
            }
            legsObj.children[value].visible = true;
            c.at(positions[value] ?? positions[0]);
            ppObj.at(ppPositions[value] ?? ppPositions[0]);
            bigPpObj.at(ppObj).add(45, 87);
            const angle = bigPpAngles[value];
            if (angle !== null) {
                bigPpObj.setAngle(bigPpAngles[value] ?? 0);
            }
            bigPpObj.setStrokeDirection(bigPpStrokeDirections[value] ?? bigPpStrokeDirections[0]);
        },
        set ppVisible(value: boolean) {
            ppObj.visible = value;
            bigPpObj.visible = value;
        },
    })
        .step(() => {
            {
                const angle = bigPpAngles[subimage];
                if (angle !== null) {
                    delta = 0;
                    return;
                }
            }

            const currentAngle = bigPpObj.getAngle();
            delta -= Math.sign(currentAngle);
            bigPpObj.setVirtualAngle(currentAngle + delta, Math.round((currentAngle + delta) / 15) * 15);
            delta = approachLinear(delta, 0, 0.2);
        });

    c.subimage = 0;

    return c;
}

function objHead() {
    const scleraObj = Sprite.from(txSclera).mixin(mxnBoilPivot);
    const faceObj = Sprite.from(txFace).mixin(mxnBoilPivot);
    const hatObj = Sprite.from(txHat);
    const headObj = Sprite.from(txHead);

    const visualHeadObj = container(headObj, hatObj, scleraObj, faceObj)
        .mixin(mxnBoilPivot)
        .at(0, 10);

    function shedTear() {
        const b = scleraObj.getBounds();
        objFxTear().at(b).add(40, 50).show();
    }

    return container(visualHeadObj)
        .merge({ isLookingLeft: false, lookingVerticalUnit: 0, isFacingAway: false, shedTear })
        .step(self => {
            faceObj.x = approachLinear(faceObj.x, self.isLookingLeft ? -16 : 0, 1);
            scleraObj.x = approachLinear(scleraObj.x, self.isLookingLeft ? -16 : 0, 2);

            faceObj.y = approachLinear(faceObj.y, self.lookingVerticalUnit * 5, 1);
            scleraObj.y = approachLinear(scleraObj.y, self.lookingVerticalUnit * 5, 2);

            hatObj.flipH(scleraObj.x < -8 ? -1 : 1);
            headObj.flipH(faceObj.x < -15 ? -1 : 1);

            faceObj.visible = !self.isFacingAway;
            scleraObj.visible = !self.isFacingAway;
            hatObj.texture = self.isFacingAway ? txHatFacingAway : txHat;
        });
}

function objPlayerPuppet() {
    const headRestY = 0;
    const headLandingY = 5;
    const headDownY = 17;

    let headY = 0;

    const legsObj = objLegs();
    const headObj = objHead();
    return container(legsObj, headObj)
        .pivoted(45, 69 + 24)
        .merge({
            isMovingLeft: false,
            pedometer: 0,
            isSkidding: false,
            isDucking: false,
            isSkiddingSevere: false,
            isJumping: false,
            isFalling: false,
            isFacingAway: false,
            landingFrames: 0,
            shedTear: headObj.shedTear,
        })
        .step(self => {
            headObj.isLookingLeft = self.isMovingLeft;
            headObj.lookingVerticalUnit = self.isJumping ? -1 : 0;
            legsObj.flipH(self.isMovingLeft ? -1 : 1);

            legsObj.ppVisible = !self.isFacingAway;
            headObj.isFacingAway = self.isFacingAway;

            const skidX = 7 * (self.isMovingLeft ? -1 : 1);
            headObj.x = approachLinear(headObj.x, self.isSkiddingSevere ? skidX : 0, self.isSkiddingSevere ? 1 : 2);
            if (self.isDucking) {
                headY = approachLinear(headY, headDownY, 2);
                headObj.y = Math.min(headDownY, Math.round(headY / 3) * 3);
            }
            else if (self.landingFrames > 0) {
                headY = headLandingY;
                headObj.y = headY;
            }
            else {
                headY = approachLinear(headY, headRestY, 3);
                headObj.y = headY;
            }

            if (self.isSkidding) {
                legsObj.subimage = self.isDucking ? 6 : 2;
            }
            else if (self.isDucking) {
                legsObj.subimage = headObj.y > 5 ? 3 : 0;
            }
            else if (self.isJumping) {
                legsObj.subimage = 4;
            }
            else if (self.isFalling) {
                legsObj.subimage = 5;
            }
            else {
                if (self.pedometer === 0) {
                    legsObj.subimage = 0;
                }
                else {
                    legsObj.subimage = Math.abs(Math.round(self.pedometer)) % 2 === 0 ? 7 : 1;
                }
            }

            self.landingFrames--;
        });
}

function objPlayer() {
    const puppet = objPlayerPuppet()
        .mixin(mxnPhysics, {
            gravity: PlayerConsts.Gravity,
            physicsRadius: 10,
            onMove(event) {
                if (event.hitGround && !event.previousOnGround && event.previousSpeed.y > PlayerConsts.Gravity) {
                    puppet.landingFrames = 8;
                    for (let i = -2; i <= 2; i++) {
                        objFxHeart().at(puppet).add(i * 9, 16).show();
                    }
                }
            },
        })
        .merge({
            get hasControl() {
                return !Cutscene.isPlaying;
            },
        })
        .step(() => {
            const hasControl = puppet.hasControl;
            const willJump = hasControl && puppet.isOnGround && Input.justWentDown("Jump");
            const isDucking = hasControl && puppet.isOnGround && !willJump && Input.isDown("Duck");
            const isMovingLeft = hasControl && !isDucking && Input.isDown("MoveLeft");
            const isMovingRight = hasControl && !isDucking && Input.isDown("MoveRight");

            if (puppet.isDucking != isDucking) {
                (isDucking ? Sfx.Player.Duck : Sfx.Player.Unduck).with.rate(Rng.float(0.9, 1.1)).play();
            }
            puppet.isDucking = isDucking;

            if (isMovingLeft == isMovingRight) {
                puppet.isSkidding = isDucking && puppet.speed.x !== 0;
                puppet.isSkiddingSevere = false;
                puppet.speed.x = approachLinear(
                    puppet.speed.x,
                    0,
                    puppet.isSkidding ? PlayerConsts.SkiddingDelta : PlayerConsts.WalkingDeceleration,
                );
            }
            else {
                puppet.isSkidding = (isMovingLeft && puppet.speed.x > 0) || (isMovingRight && puppet.speed.x < 0);
                puppet.isSkiddingSevere = puppet.isSkidding;
                puppet.isMovingLeft = isMovingLeft;
                puppet.speed.x = approachLinear(
                    puppet.speed.x,
                    PlayerConsts.WalkingTopSpeed * (isMovingLeft ? -1 : 1),
                    puppet.isSkidding ? PlayerConsts.SkiddingDelta : PlayerConsts.WalkingAcceleration,
                );
            }

            puppet.pedometer = (puppet.speed.x === 0 || puppet.isSkidding)
                ? 0
                : (puppet.pedometer + puppet.speed.x * 0.05);

            if (
                hasControl && !puppet.isOnGround && puppet.speed.y < PlayerConsts.VariableJumpSpeedMaximum
                && Input.isDown("Jump")
            ) {
                puppet.speed.y += PlayerConsts.VariableJumpDelta;
            }
            if (willJump) {
                puppet.speed.y = PlayerConsts.JumpSpeed;
            }

            puppet.isJumping = puppet.speed.y < 0 && !puppet.isOnGround;
            puppet.isFalling = puppet.speed.y > 0 && !puppet.isOnGround;

            if (puppet.isSkidding && puppet.isOnGround && puppet.speed.x !== 0 && scene.ticker.ticks % 3 === 0) {
                const dx = Math.sign(-puppet.speed.x) * (puppet.isDucking ? 10 : 24);
                const dy = puppet.isDucking ? 15 : 9;
                objFxHeart().at(puppet.x + dx, puppet.y + dy).show();
            }
        });

    console.log(puppet);

    return puppet;
}

type ObjPlayer = ReturnType<typeof objPlayer>;

export function isPlayerObj(obj: DisplayObject): obj is ObjPlayer {
    return obj === playerObj;
}

export let playerObj: ObjPlayer;

export function createPlayerObj() {
    return playerObj = objPlayer();
}
