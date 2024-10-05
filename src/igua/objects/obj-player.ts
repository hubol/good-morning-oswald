import { DisplayObject, Sprite } from "pixi.js";
import { Cutscene, Input, scene } from "../globals";
import { mxnPhysics } from "../mixins/mxn-physics";
import { container } from "../../lib/pixi/container";
import { approachLinear } from "../../lib/math/number";
import { Tx } from "../../assets/textures";
import { mxnBoilPivot } from "../mixins/mxn-boil-pivot";
import { vnew } from "../../lib/math/vector-type";
import { objFxHeart } from "./fx/obj-fx-heart";

const PlayerConsts = {
    WalkingTopSpeed: 3,
    WalkingAcceleration: 0.3,
    WalkingDeceleration: 0.2,
    SkiddingDelta: 0.1,
    JumpSpeed: -3,
    VariableJumpSpeedMaximum: -1.5,
    VariableJumpDelta: -0.095,
    Gravity: 0.15,
};

const [txLegsRest, txLegsWalk, txHead, txSclera, txFace, txPp, txHat, txLegsSkid, txLegsDuck, txLegsFall] = Tx.Player
    .Layers.split({
        width: 86,
    });

function objLegs() {
    let subimage = -1;
    const legsObj = container(
        Sprite.from(txLegsRest),
        Sprite.from(txLegsWalk),
        Sprite.from(txLegsSkid),
        Sprite.from(txLegsDuck),
        Sprite.from(txLegsWalk),
        Sprite.from(txLegsFall),
    );

    const positions = [
        vnew(),
        vnew(),
        vnew(),
        vnew(0, 13),
        vnew(0, -4),
        vnew(),
    ];

    const ppPositions = [
        vnew(),
        vnew(0, 0),
        vnew(),
        vnew(0, 1),
        vnew(),
        vnew(),
    ];

    const ppObj = Sprite.from(txPp);

    const c = container(legsObj, ppObj).merge({
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
        },
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

    return container(visualHeadObj)
        .merge({ isLookingLeft: false, lookingVerticalUnit: 0 })
        .step(self => {
            faceObj.x = approachLinear(faceObj.x, self.isLookingLeft ? -16 : 0, 1);
            scleraObj.x = approachLinear(scleraObj.x, self.isLookingLeft ? -16 : 0, 2);

            faceObj.y = approachLinear(faceObj.y, self.lookingVerticalUnit * 5, 1);
            scleraObj.y = approachLinear(scleraObj.y, self.lookingVerticalUnit * 5, 2);

            hatObj.flipH(scleraObj.x < -8 ? -1 : 1);
            headObj.flipH(faceObj.x < -15 ? -1 : 1);
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
            landingFrames: 0,
        })
        .step(self => {
            headObj.isLookingLeft = self.isMovingLeft;
            headObj.lookingVerticalUnit = self.isJumping ? -1 : 0;
            legsObj.flipH(self.isMovingLeft ? -1 : 1);

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
                legsObj.subimage = 2;
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
                legsObj.subimage = Math.abs(Math.round(self.pedometer)) % 2;
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
                if (event.hitGround && !event.previousOnGround) {
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
            const isDucking = hasControl && puppet.isOnGround && Input.isDown("Duck");
            const isMovingLeft = hasControl && !isDucking && Input.isDown("MoveLeft");
            const isMovingRight = hasControl && !isDucking && Input.isDown("MoveRight");

            if (isMovingLeft == isMovingRight) {
                puppet.isSkidding = isDucking && puppet.speed.x !== 0;
                puppet.isSkiddingSevere = false;
                puppet.isDucking = isDucking && !puppet.isSkidding;
                puppet.speed.x = approachLinear(
                    puppet.speed.x,
                    0,
                    puppet.isSkidding ? PlayerConsts.SkiddingDelta : PlayerConsts.WalkingDeceleration,
                );
            }
            else {
                puppet.isDucking = false;
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
            if (hasControl && puppet.isOnGround && !isDucking && Input.justWentDown("Jump")) {
                puppet.speed.y = PlayerConsts.JumpSpeed;
            }

            puppet.isJumping = puppet.speed.y < 0 && !puppet.isOnGround;
            puppet.isFalling = puppet.speed.y > 0 && !puppet.isOnGround;

            if (puppet.isSkidding && puppet.isOnGround && puppet.speed.x !== 0 && scene.ticker.ticks % 3 === 0) {
                const dx = puppet.speed.x < 0 ? 24 : -24;
                objFxHeart().at(puppet.x + dx, puppet.y + 9).show();
            }
        });

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
