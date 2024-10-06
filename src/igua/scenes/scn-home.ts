import { Lvl } from "../../assets/generated/levels/generated-level-data";
import { Mzk } from "../../assets/music";
import { lerp } from "../../lib/game-engine/routines/lerp";
import { sleep } from "../../lib/game-engine/routines/sleep";
import { blendPixiColor } from "../../lib/pixi/blend-pixi-color";
import { container } from "../../lib/pixi/container";
import { Jukebox } from "../core/igua-audio";
import { Cutscene, forceGameLoop, scene } from "../globals";
import { playerObj } from "../objects/obj-player";

export function scnHome() {
    Jukebox.warm(Mzk.Home, Mzk.Field);
    const { HomeGoodMorning, HomeWindow, HomeWindowLight, TelephoneLed } = Lvl.Home();
    HomeGoodMorning.visible = false;
    HomeWindowLight.alpha = 0;

    TelephoneLed.coro(function* (self) {
        while (true) {
            yield sleep(400);
            self.tint = self.tint === 0 ? 0xffffff : 0;
        }
    });

    const windowInitialTint = HomeWindow.tintValue;

    playerObj.isFacingAway = true;

    Cutscene.play(function* () {
        yield sleep(1000);
        const blender = container().merge({ factor: 0 }).step(self => {
            HomeWindow.tint = blendPixiColor(windowInitialTint, 0xADDAFF, Math.round(self.factor * 5) / 5);
            HomeWindowLight.alpha = Math.max(0, Math.round((self.factor - 0.5) * 10) / 5);
        }).show();
        yield lerp(blender, "factor").to(1).over(1000);
        yield sleep(1000);
        playerObj.isFacingAway = false;
        yield sleep(1000);
        playerObj.shedTear();
        yield sleep(1500);
        HomeGoodMorning.visible = true;
        Jukebox.play(Mzk.Home);
        yield sleep(500);
    });

    scene.ticker.tick();
}
