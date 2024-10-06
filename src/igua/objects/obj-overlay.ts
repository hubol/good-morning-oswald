import { Graphics } from "pixi.js";
import { objText } from "../../assets/fonts";
import { container } from "../../lib/pixi/container";
import { scene } from "../globals";
import { Collections } from "../systems/collections";

function computeMoney() {
    return (Collections.severanceMoney ? 900 : 0) + Collections.looseMoneyUids.size;
}

function objMoneyCounter() {
    const tint = 0xC1323E;

    return container(
        new Graphics().lineStyle({ color: tint, width: 1 }).moveTo(0, 4).lineTo(32, 4).moveTo(80 + 15, 4).lineTo(
            112 + 15,
            4,
        ),
        objText.Large("Your Funds", { tint }).at(36, 0),
        objText.LargeScribbleDigits("0", { tint }).step(self => {
            self.text = computeMoney().toString();
        }).at(0, 10),
    ).at(4, 4);
}

export function objOverlay() {
    const obj = container(objMoneyCounter())
        .step(self => {
            self.visible = scene.source.name.includes("evel1");
        });

    obj.visible = false;

    return obj;
}
