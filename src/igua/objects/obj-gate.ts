import { Graphics, Sprite } from "pixi.js";
import { playerObj } from "./obj-player";
import { sceneStack } from "../globals";
import { EscapeTickerAndExecute } from "../../lib/game-engine/asshat-ticker";
import { SceneLibrary } from "../core/scene/scene-library";

interface ObjGateValues {
    sceneName: string;
}

export function objGate({ sceneName }: ObjGateValues) {
    const scene = SceneLibrary.maybeFindByName(sceneName);

    const gfx = new Graphics().beginFill().drawRect(0, 0, 1, 1).step(() => {
        if (scene && playerObj.collides(gfx)) {
            throw new EscapeTickerAndExecute(() => sceneStack.replace(scene, { useGameplay: true }));
        }
    });
    gfx.visible = false;
    return gfx;
}
