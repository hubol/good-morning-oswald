import { DisplayObject } from "pixi.js";
import { sleep } from "../../lib/game-engine/routines/sleep";
import { Rng } from "../../lib/math/rng";

export function mxnBoilPivot(obj: DisplayObject) {
    let f = 0;
    let rate = 0;
    let cx = 0;
    let cy = 0;
    let dx = 0;
    let dy = 0;
    let ex = 0;
    let ey = 0;

    function update() {
        rate = Rng.float(1, 2) * Rng.choose(1, -1);
        cx = Rng.float(-9, 9);
        cy = Rng.float(-9, 9);
        dx = Rng.float(-0.2, 0.2);
        dy = Rng.float(-0.2, 0.2);
        ex = Rng.intc(2);
        ey = Rng.intc(ex === 0 ? 1 : 0, 2);
    }

    update();

    return obj.coro(function* () {
        while (true) {
            yield sleep(Rng.float(500, 2000));
            update();
        }
    })
        .step(() => {
            f += rate;
            obj.pivot.set(
                Math.round(Math.cos(cx + f * dx) * ex),
                Math.round(Math.sin(cy - f * dy)) * ey,
            );
        });
}
