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
    JumpSpeed: -3,
    VariableJumpSpeedMaximum: -1.5,
    VariableJumpDelta: -0.095,
    Gravity: 0.15,
};

const [txLegsRest, txLegsWalk, txHead, txSclera, txFace, txPp] = Tx.Player.Layers.split({ width: 86 });

function objLegs() {
    let subimage = -1;
    const legsObj = container(Sprite.from(txLegsRest), Sprite.from(txLegsWalk));

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
    return container(Sprite.from(txHead), scleraObj, faceObj).mixin(mxnBoilPivot);
}

function objPlayerPuppet() {
    return container(objLegs(), objHead().at(0, 16)).pivoted(45, 69);
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
            const isMovingLeft = hasControl && Input.isDown("MoveLeft");
            const isMovingRight = hasControl && Input.isDown("MoveRight");

            if (isMovingLeft == isMovingRight) {
                puppet.speed.x = approachLinear(puppet.speed.x, 0, PlayerConsts.WalkingDeceleration);
            }
            else {
                puppet.speed.x = approachLinear(
                    puppet.speed.x,
                    PlayerConsts.WalkingTopSpeed * (isMovingLeft ? -1 : 1),
                    PlayerConsts.WalkingAcceleration,
                );
            }

            if (
                hasControl && !puppet.isOnGround && puppet.speed.y < PlayerConsts.VariableJumpSpeedMaximum
                && Input.isDown("Jump")
            ) {
                puppet.speed.y += PlayerConsts.VariableJumpDelta;
            }
            if (hasControl && puppet.isOnGround && Input.justWentDown("Jump")) {
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
