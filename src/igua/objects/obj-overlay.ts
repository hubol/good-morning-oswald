import { Graphics } from "pixi.js";
import { objText } from "../../assets/fonts";
import { container } from "../../lib/pixi/container";
import { scene } from "../globals";
import { Collections } from "../systems/collections";
import { Instances } from "../../lib/game-engine/instances";
import { objNpcMessage } from "./obj-npc";
import { approachLinear } from "../../lib/math/number";
import { CollisionShape } from "../../lib/pixi/collision";
import { Sfx } from "../../assets/sounds";

export function computeMoney() {
    return (Collections.severanceMoney ? 981 : 0) + Collections.looseMoneyUids.size;
}

function objMoneyCounter() {
    const tint = 0xC1323E;
    let alpha = 1;
    let previousValue: number | null = null;
    let currentValue = 0;
    let shownComputedValueSteps = 0;

    const differentialObj = objText.LargeBold("", { tint }).at(0, 35);
    const totalObj = objText.LargeScribbleDigits("0", { tint });
    return container(
        new Graphics().lineStyle({ color: tint, width: 1 }).moveTo(0, 4).lineTo(32, 4).moveTo(80 + 15, 4).lineTo(
            112 + 15,
            4,
        ),
        objText.Large("Your Funds", { tint }).at(36, 0),
        totalObj.at(0, 10),
        differentialObj,
    )
        .collisionShape(CollisionShape.Children)
        .at(4, 4)
        .step(self => {
            const nextValue = computeMoney();
            if (currentValue !== nextValue) {
                if (previousValue === null) {
                    previousValue = currentValue;
                }
                shownComputedValueSteps = 0;
            }
            else {
                shownComputedValueSteps++;
                if (shownComputedValueSteps >= 90) {
                    previousValue = null;
                }
            }

            currentValue = approachLinear(currentValue, nextValue, 21);
            totalObj.text = currentValue.toString();
            const previousDifferentialObjText = differentialObj.text;
            differentialObj.text = previousValue === null ? "" : `+${nextValue - previousValue}`;
            if (differentialObj.text && previousDifferentialObjText !== differentialObj.text) {
                Sfx.Collect.Money.play();
            }

            alpha = approachLinear(
                alpha,
                !Instances(objNpcMessage).some(x => x.visible && x.collides(self)) ? 1 : 0,
                0.1,
            );
            self.alpha = Math.round(alpha * 3) / 3;
        });
}

export function objOverlay() {
    const obj = container(objMoneyCounter())
        .step(self => {
            self.visible = scene.source.name.includes("evel1");
        });

    obj.visible = false;

    return obj;
}
