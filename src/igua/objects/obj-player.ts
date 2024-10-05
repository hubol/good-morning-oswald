import { DisplayObject } from "pixi.js";
import { Cutscene, Input } from "../globals";
import { mxnPhysics } from "../mixins/mxn-physics";
import { container } from "../../lib/pixi/container";
import { approachLinear } from "../../lib/math/number";
import { Tx } from "../../assets/textures";

const PlayerConsts = {
    WalkingTopSpeed: 3,
    WalkingAcceleration: 0.3,
    WalkingDeceleration: 0.2,
    JumpSpeed: -3,
    VariableJumpSpeedMaximum: -1.5,
    VariableJumpDelta: -0.095,
    Gravity: 0.15,
};

Tx.Player.Layers.split({ width: 86 });

function objPlayerPuppet() {
    return container();
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
