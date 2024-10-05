import { Sprite } from "pixi.js";
import { Tx } from "../../../assets/textures";
import { mxnDestroyAfterSteps } from "../../mixins/mxn-destroy-after-steps";

export function objFxPop() {
    return Sprite.from(Tx.Fx.PopSmall).anchored(0.5, 0.5).mixin(mxnDestroyAfterSteps, 15);
}
