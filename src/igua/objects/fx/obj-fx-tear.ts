import { Sprite } from "pixi.js";
import { Tx } from "../../../assets/textures";
import { mxnPhysics } from "../../mixins/mxn-physics";
import { objFxPop } from "./obj-fx-pop";

export function objFxTear() {
    const obj = Sprite.from(Tx.Home.Tear).mixin(mxnPhysics, {
        gravity: 0.2,
        physicsRadius: 5,
        physicsOffset: [0, 0],
        onMove(event) {
            if (event.hitGround) {
                objFxPop().at(obj).add(0, 0).tinted(0x548FFF).show();
                obj.destroy();
            }
        },
    })
        .anchored(0.5, 0);
    return obj;
}
