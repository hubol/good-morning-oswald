import { Graphics, Rectangle, Sprite } from "pixi.js";
import { Tx } from "../../assets/textures";
import { PseudoRng } from "../../lib/math/rng";
import { container } from "../../lib/pixi/container";
import { mxnBoilPivot } from "../mixins/mxn-boil-pivot";
import { AdjustColor } from "../../lib/pixi/adjust-color";
import { objText } from "../../assets/fonts";
import { playerObj } from "./obj-player";
import { renderer } from "../globals";
import { CollisionShape } from "../../lib/pixi/collision";
import { Sfx } from "../../assets/sounds";

interface ObjNpcArgs {
    message: string;
    style: number;
}

const [
    txBody,
    txNoggin,
    txPp,
    txSclera,
    txPupils0,
    txPupils1,
    txPupils2,
    txPupils3,
    txNose0,
    txNose1,
    txNose2,
    txMouth0,
    txMouth1,
    txMouth2,
    txMouth3,
    txHat0,
    txHat1,
    txHat2,
    txHat3,
] = Tx.Npc.Layers.split({ width: 90 });

function objNpcHead(rng: PseudoRng, skinTint: number, featuresTint: number) {
    return container(
        Sprite.from(txNoggin).tinted(skinTint),
        Sprite.from(rng.choose(txHat0, txHat1, txHat2, txHat3)).tinted(featuresTint),
        Sprite.from(txSclera).mixin(mxnBoilPivot),
        Sprite.from(rng.choose(txPupils0, txPupils1, txPupils2, txPupils3)).tinted(featuresTint).mixin(mxnBoilPivot),
        Sprite.from(rng.choose(txMouth0, txMouth1, txMouth2, txMouth3)).tinted(featuresTint).mixin(
            mxnBoilPivot,
        ),
        Sprite.from(rng.choose(txNose0, txNose1, txNose2)).tinted(featuresTint).mixin(mxnBoilPivot),
    ).mixin(mxnBoilPivot);
}

export function objNpcMessage(message: string) {
    let previous = false;

    const obj = container(
        Sprite.from(Tx.Npc.Message).mixin(mxnBoilPivot),
        objText.LargeBold(message, { maxWidth: 320, tint: 0xC1323E, align: "center" }).at(164, 27).anchored(
            0.5,
            0.5,
        ),
    ).step(() => {
        if (previous === obj.visible) {
            return;
        }

        (obj.visible ? Sfx.Dialog.Open : Sfx.Dialog.Close).play();
        previous = obj.visible;
    });

    obj.visible = false;

    return obj;
}

export function objNpc({ message, style }: ObjNpcArgs) {
    const rng = new PseudoRng(style);

    // Math be like
    const skinTint = AdjustColor.hsv(rng.int(359), rng.float(75, 100), 100).toPixi();
    const featuresTint = rng.color();

    const messageObj = objNpcMessage(message).at(-112 - 46, -52 - 101);

    const bodyObj = container(
        Sprite.from(txBody).tinted(skinTint),
        Sprite.from(txPp).tinted(featuresTint),
        objNpcHead(rng, skinTint, featuresTint),
    ).pivoted(46, 101);

    if (rng.bool()) {
        bodyObj.scale.x = -1;
    }

    const hitboxObj = new Graphics().beginFill().drawRect(-32, -80, 64, 80);
    hitboxObj.visible = false;

    return container(
        bodyObj,
        messageObj,
        hitboxObj,
    )
        .collisionShape(CollisionShape.DisplayObjects, [hitboxObj])
        .step(self => {
            messageObj.visible = self.collides(playerObj);
        });
}
