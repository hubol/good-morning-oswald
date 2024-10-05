import { Container } from "pixi.js";
import { Logging } from "../../lib/logging";

export class IguaLayers {
    readonly scene: Container;
    // readonly overlay: Overlay;

    constructor(private readonly _root: Container) {
        this.scene = new Container().named("SceneStack");
        _root.addChild(this.scene);
        // const overlayObj = objOverlay().named("Overlay");
        // this.overlay = overlayObj;

        // _root.addChild(this.scene, overlayObj);

        console.log(...Logging.componentArgs(this));
    }
}
