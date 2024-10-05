import { Sprite } from "pixi.js";
import { Tx } from "../../../assets/textures";
import { lerp } from "../../../lib/game-engine/routines/lerp";
import { Rng } from "../../../lib/math/rng";
import { sleep } from "../../../lib/game-engine/routines/sleep";

const tints = [0xEC524A, 0xECAADD];
let tintIndex = 0;

export function objFxHeart() {
    const yd = Rng.float(-0.3, -1.4);

    return Sprite.from(Tx.Fx.Heart)
        .anchored(0.5, 0.5)
        .tinted(tints[tintIndex++ % tints.length])
        .step(self => {
            self.scale.y = Math.abs(self.scale.x);
            console.log(self.scale.y);
            self.y += yd;
        })
        .coro(function* (self) {
            self.scale.at(0, 0);
            yield lerp(self.scale, "x").to(Rng.choose(1, -1)).over(Rng.float(100, 300));
            yield sleep(Rng.float(400, 800));
            yield lerp(self.scale, "x").to(0).over(Rng.float(100, 300));
            self.destroy();
        });
}
