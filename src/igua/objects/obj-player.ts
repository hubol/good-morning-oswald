import { DisplayObject, Sprite } from "pixi.js";
import { Cutscene, Input } from "../globals";
import { mxnPhysics } from "../mixins/mxn-physics";
import { container } from "../../lib/pixi/container";
import { approachLinear } from "../../lib/math/number";
import { Tx } from "../../assets/textures";
import { mxnBoilPivot } from "../mixins/mxn-boil-pivot";

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

const [txLegsRest, txLegsWalk, txHead, txSclera, txFace, txPp, txHat, txLegsSkid] = Tx.Player.Layers.split({
    width: 86,
});

function objLegs() {
    let subimage = -1;
    const legsObj = container(Sprite.from(txLegsRest), Sprite.from(txLegsWalk), Sprite.from(txLegsSkid));

    const c = container(legsObj, Sprite.from(txPp)).merge({
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
        .merge({ isLookingLeft: false })
        .step(self => {
            faceObj.x = approachLinear(faceObj.x, self.isLookingLeft ? -16 : 0, 1);
            scleraObj.x = approachLinear(scleraObj.x, self.isLookingLeft ? -16 : 0, 2);
            hatObj.flipH(scleraObj.x < -8 ? -1 : 1);
            headObj.flipH(faceObj.x < -15 ? -1 : 1);
        });
}

function objPlayerPuppet() {
    const headRestY = 0;
    const headDuckY = 17;

    const legsObj = objLegs();
    const headObj = objHead();
    return container(legsObj, headObj)
        .pivoted(45, 69 + 24)
        .merge({ isMovingLeft: false, pedometer: 0, isSkidding: false, isDucking: false })
        .step(self => {
            headObj.isLookingLeft = self.isMovingLeft;
            legsObj.flipH(self.isMovingLeft ? -1 : 1);

            headObj.y = approachLinear(headObj.y, self.isDucking ? headDuckY : headRestY, self.isDucking ? 2 : 1);

            if (self.isSkidding) {
                legsObj.subimage = 2;
            }
            else if (self.isDucking) {
                legsObj.subimage = 0;
            }
            else {
                legsObj.subimage = Math.abs(Math.round(self.pedometer)) % 2;
            }
        });
}

function objPlayer() {
    const puppet = objPlayerPuppet()
        .mixin(mxnPhysics, { gravity: PlayerConsts.Gravity, physicsRadius: 10 })
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
                puppet.speed.x = approachLinear(
                    puppet.speed.x,
                    0,
                    puppet.isSkidding ? PlayerConsts.SkiddingDelta : PlayerConsts.WalkingDeceleration,
                );
            }
            else {
                puppet.isSkidding = (isMovingLeft && puppet.speed.x > 0) || (isMovingRight && puppet.speed.x < 0);
                puppet.isMovingLeft = isMovingLeft;
                puppet.speed.x = approachLinear(
                    puppet.speed.x,
                    PlayerConsts.WalkingTopSpeed * (isMovingLeft ? -1 : 1),
                    puppet.isSkidding ? PlayerConsts.SkiddingDelta : PlayerConsts.WalkingAcceleration,
                );
            }

            puppet.isDucking = isDucking;

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
