import { Lvl } from "../../assets/generated/levels/generated-level-data";
import { Mzk } from "../../assets/music";
import { Sfx } from "../../assets/sounds";
import { EscapeTickerAndExecute } from "../../lib/game-engine/asshat-ticker";
import { Coro } from "../../lib/game-engine/routines/coro";
import { lerp } from "../../lib/game-engine/routines/lerp";
import { sleep } from "../../lib/game-engine/routines/sleep";
import { Rng } from "../../lib/math/rng";
import { vnew } from "../../lib/math/vector-type";
import { blendPixiColor } from "../../lib/pixi/blend-pixi-color";
import { container } from "../../lib/pixi/container";
import { Jukebox } from "../core/igua-audio";
import { SceneLibrary } from "../core/scene/scene-library";
import { Cutscene, sceneStack } from "../globals";
import { objMoney } from "../objects/obj-money";
import { objNpc, objNpcMessage } from "../objects/obj-npc";
import { computeMoney } from "../objects/obj-overlay";
import { playerObj } from "../objects/obj-player";
import { Collections } from "../systems/collections";

export function scnLevel1() {
    Jukebox.play(Mzk.Field);
    const { MailboxHitbox, DanceHitbox, DancingNpc, BlacksmithNpc } = Lvl.Level1();

    const severanceMoneyMessageObj = objNpcMessage(`Oswald Peanut,
Please find attached a severance check for 981u
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

    BlacksmithNpc.step(() => {
        if (computeMoney() >= 1000 && BlacksmithNpc.collides(playerObj)) {
            throw new EscapeTickerAndExecute(() =>
                sceneStack.replace(SceneLibrary.findByName("scnEnding"), { useGameplay: false })
            );
        }
    });

    DancingNpc.coro(function* () {
        for (let i = 0; i < 3; i++) {
            for (let i = 0; i < 8; i++) {
                yield () => playerObj.isDucking && DanceHitbox.collides(playerObj);
                yield sleep(33);
            }

            yield () => !playerObj.isDucking;
        }
        DancingNpc.messageObj.text = "You're a great dancer!! Please accept this tip!";

        const positions = [vnew(-40, -100), vnew(0, -120), vnew(40, -100)];

        let i = 0;
        for (const position of positions) {
            Sfx.Fx.MoneyCount.play();
            objMoney({ uid: -33 + (i++) })!.at(DancingNpc).add(position).show();
        }
    })
        .coro(function* (self) {
            while (true) {
                self.isDucking = !self.isDucking;
                yield sleep(Rng.choose(250, 500));
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
