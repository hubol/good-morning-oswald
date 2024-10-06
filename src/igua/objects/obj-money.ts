import { Sprite } from "pixi.js";
import { Collections } from "../systems/collections";
import { Tx } from "../../assets/textures";
import { playerObj } from "./obj-player";
import { objFxPop } from "./fx/obj-fx-pop";

interface ObjMoneyArgs {
    uid: number;
}

export function objMoney({ uid }: ObjMoneyArgs) {
    if (Collections.looseMoneyUids.has(uid)) {
        return;
    }

    return Sprite.from(Tx.Collectibles.Money).anchored(0.5, 0.5).step(self => {
        if (self.collides(playerObj.collectionBox)) {
            objFxPop().at(self).tinted(0xEAA400).show();
            // TODO effects
            Collections.looseMoneyUids.add(uid);
            self.destroy();
        }
    });
}
