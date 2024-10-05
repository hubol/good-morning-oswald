import { Lvl } from "../../assets/generated/levels/generated-level-data";
import { lerp } from "../../lib/game-engine/routines/lerp";
import { sleep } from "../../lib/game-engine/routines/sleep";
import { blendPixiColor } from "../../lib/pixi/blend-pixi-color";
import { container } from "../../lib/pixi/container";
import { Cutscene, forceGameLoop } from "../globals";
import { playerObj } from "../objects/obj-player";

export function scnHome() {
    const { HomeGoodMorning, HomeWindow, HomeWindowLight } = Lvl.Home();
    HomeGoodMorning.visible = false;
    HomeWindowLight.alpha = 0;

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
        yield sleep(500);
    });
}
