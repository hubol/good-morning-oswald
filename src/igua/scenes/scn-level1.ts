import { Lvl } from "../../assets/generated/levels/generated-level-data";
import { Mzk } from "../../assets/music";
import { Coro } from "../../lib/game-engine/routines/coro";
import { lerp } from "../../lib/game-engine/routines/lerp";
import { blendPixiColor } from "../../lib/pixi/blend-pixi-color";
import { container } from "../../lib/pixi/container";
import { Jukebox } from "../core/igua-audio";
import { Cutscene } from "../globals";
import { objNpc, objNpcMessage } from "../objects/obj-npc";
import { playerObj } from "../objects/obj-player";
import { Collections } from "../systems/collections";

export function scnLevel1() {
    Jukebox.play(Mzk.Field);
    const { MailboxHitbox } = Lvl.Level1();

    const severanceMoneyMessageObj = objNpcMessage(`Oswald Peanut,
Please find attached a severance check for 900u
-FightCo HR`)
        .at(MailboxHitbox).add(0, -32)
        .show();

    MailboxHitbox.step(self => {
        const collided = self.collides(playerObj);
        severanceMoneyMessageObj.visible = collided;
        if (collided) {
            // TODO idk
            Collections.severanceMoney = true;
        }
    });

    return;

    Cutscene.play(function* () {
        playerObj.scale.x = 0;
        playerObj.alpha = 0;
        playerObj.step(() => {
            playerObj.scale.y = Math.sign(playerObj.scale.y) * playerObj.scale.x;
        });

        // const blender = container().merge({ factor: 0 }).step(self => {

        //     playerObj.tint = blendPixiColor(windowInitialTint, 0xADDAFF, Math.round(self.factor * 5) / 5);
        // }).show();

        // playerObj.speed.x = 1;
        yield* Coro.all([
            // lerp(blender, "factor").to(1).over(1000),
            lerp(playerObj, "alpha").to(1).over(1000),
            lerp(playerObj.scale, "x").to(1).over(1000),
        ]);
        // playerObj.speed.x = 0;
    });
}
