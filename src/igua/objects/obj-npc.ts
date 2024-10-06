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
    messageAlign?: Align;
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
    txBodyDucked,
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

type Align = "left" | "right" | "center";

const xByAlign: Record<Align, number> = {
    center: 164,
    left: 6,
    right: 336,
};

const anchorXByAlign: Record<Align, number> = {
    center: 0.5,
    left: 0,
    right: 1,
};

export function objNpcMessage(message: string, align: Align = "center") {
    let previous = false;

    const textObj = objText.LargeBold(message, { maxWidth: 320, tint: 0xC1323E, align }).at(xByAlign[align], 27)
        .anchored(
            anchorXByAlign[align],
            0.5,
        );

    const obj = container(
        Sprite.from(Tx.Npc.Message).mixin(mxnBoilPivot),
        textObj,
    ).step(() => {
        if (previous === obj.visible) {
            return;
        }

        (obj.visible ? Sfx.Dialog.Open : Sfx.Dialog.Close).play();
        previous = obj.visible;
    })
        .merge({
            get text() {
                return textObj.text;
            },
            set text(value) {
                textObj.text = value;
            },
        })
        .track(objNpcMessage)
        .pivoted(161, 63);

    obj.visible = false;

    return obj;
}

export function objNpc({ message, style, messageAlign }: ObjNpcArgs) {
    const rng = new PseudoRng(style);

    // Math be like
    const skinTint = AdjustColor.hsv(rng.int(359), rng.float(75, 100), 100).toPixi();
    const featuresTint = rng.color();

    const messageObj = objNpcMessage(message, messageAlign).at(0, -100);

    const bodySpr = Sprite.from(txBody).tinted(skinTint);
    const headObj = objNpcHead(rng, skinTint, featuresTint);
    const bodyObj = container(
        bodySpr,
        Sprite.from(txPp).tinted(featuresTint),
        headObj,
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
        .merge({ messageObj, isDucking: false })
        .step(self => {
            messageObj.visible = self.collides(playerObj);
            bodySpr.texture = self.isDucking ? txBodyDucked : txBody;
            headObj.y = self.isDucking ? 11 : 0;
        });
}
