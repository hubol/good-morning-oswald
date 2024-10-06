import { BitmapText, Sprite } from "pixi.js";
import { Tx } from "../../assets/textures";
import { container } from "../../lib/pixi/container";
import { mxnBoilPivot } from "../mixins/mxn-boil-pivot";
import { Coro } from "../../lib/game-engine/routines/coro";
import { lerp } from "../../lib/game-engine/routines/lerp";
import { Cutscene } from "../globals";
import { sleep } from "../../lib/game-engine/routines/sleep";
import { objText } from "../../assets/fonts";
import { Jukebox } from "../core/igua-audio";
import { Mzk } from "../../assets/music";

function* type(text: string, textObj: BitmapText) {
    let position = 0;
    while (true) {
        const nextIndex = text.indexOf(" ", position);
        if (nextIndex === -1) {
            textObj.text += text.substring(position);
            return;
        }
        textObj.text += text.substring(position, nextIndex) + " ";
        position = nextIndex + 1;
        yield sleep(33);
    }
}

const endingText =
    `And so, after suffering a mutilation during a routine teleportation to a boxing match, Oswald purchased a cock cage for 1000u.

Now, in this world, no one can humiliate him. He is normal now with his small weenie.`;

export function scnEnding() {
    Jukebox.play(Mzk.Home);
    const oswaldObj = objOswaldEnding().at(40, -40).scaled(0.67, 0.67).show();

    const textObj = objText.Large("", { tint: 0xC1323E, maxWidth: 248 }).at(256, 8).show();

    Cutscene.play(function* () {
        yield sleep(500);
        yield* oswaldObj.lock();
        oswaldObj.mixin(mxnBoilPivot);
        yield* type(endingText, textObj);
    });
}

const [txBody, txPpBig, txKey, txKeyTurned, txPpLocked, txSclera, txFace, txHat] = Tx.Ending.Oswald.split({
    width: 432,
});

function objOswaldEnding() {
    const ppBigObj = Sprite.from(txPpBig);
    const keyObj = Sprite.from(txKey).at(32, -16);
    keyObj.alpha = 0;
    const keyTurnedObj = Sprite.from(txKeyTurned);
    keyTurnedObj.visible = false;
    const ppLockedObj = Sprite.from(txPpLocked);
    ppLockedObj.alpha = 0;

    const lock: () => Coro.Type = function* lock () {
        const trackAlphaObj = container().step(self => {
            ppBigObj.alpha = Math.round(self.alpha * 3) / 3;
            ppLockedObj.alpha = 1 - ppBigObj.alpha;
        }).show();

        yield lerp(trackAlphaObj, "alpha").to(0).over(1000);

        const trackAlphaObj2 = container().step(self => {
            keyObj.alpha = Math.round(self.alpha * 3) / 3;
        }).show();

        trackAlphaObj2.alpha = 0;

        yield lerp(trackAlphaObj2, "alpha").to(1).over(1000);

        yield* Coro.all([
            lerp(keyObj, "x").to(0).over(1000),
            lerp(keyObj, "y").to(0).over(1000),
        ]);

        yield sleep(250);
        keyObj.visible = false;
        keyTurnedObj.visible = true;

        const trackAlphaObj3 = container().step(self => {
            keyTurnedObj.alpha = Math.round(self.alpha * 3) / 3;
        }).show();

        yield sleep(500);

        yield* Coro.all([
            lerp(keyTurnedObj, "x").to(32).over(1000),
            lerp(keyTurnedObj, "y").to(-16).over(1000),
        ]);

        yield lerp(trackAlphaObj3, "alpha").to(0).over(1000);
    };

    return container(
        Sprite.from(txBody),
        ppBigObj,
        keyObj,
        keyTurnedObj,
        ppLockedObj,
        Sprite.from(txSclera).mixin(mxnBoilPivot),
        Sprite.from(txFace).mixin(mxnBoilPivot),
        Sprite.from(txHat),
    )
        .merge({
            lock,
        });
}
