import { Sprite } from "pixi.js";
import { Tx } from "../../../assets/textures";
import { lerp } from "../../../lib/game-engine/routines/lerp";
import { Rng } from "../../../lib/math/rng";
import { sleep } from "../../../lib/game-engine/routines/sleep";
import { Sfx } from "../../../assets/sounds";

const tints = [0xEC524A, 0xECAADD];
let tintIndex = 0;

const sfxHearts = [
    // Sfx.Fx.Heart1,
    // Sfx.Fx.Heart2,
    // Sfx.Fx.Heart3,
    // Sfx.Fx.Heart4,
    Sfx.Fx.Heart5,
    // Sfx.Fx.Heart6,
];

export function objFxHeart() {
    const yd = Rng.float(-0.3, -1.4);

    return Sprite.from(Tx.Fx.Heart)
        .anchored(0.5, 0.5)
        .tinted(tints[tintIndex++ % tints.length])
        .step(self => {
            self.scale.y = Math.abs(self.scale.x);
            self.y += yd;
        })
        .coro(function* (self) {
            const target = Rng.choose(1, -1);
            const time = Rng.float(100, 500);
            yield lerp(self.scale, "x").to(target / 2).over(time / 2);
            Rng.choose(...sfxHearts).with.rate(Rng.float(0.7, 1)).play();
            yield lerp(self.scale, "x").to(target).over(time / 2);
            yield sleep(Rng.float(400, 800));
            yield lerp(self.scale, "x").to(0).over(Rng.float(100, 500));
            self.destroy();
        })
        .scaled(0, 0);
}
