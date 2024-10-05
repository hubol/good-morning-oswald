import { nlerp } from "../math/number";
import { Integer, Unit } from "../math/number-alias-types";
import { AdjustColor } from "./adjust-color";

const c1 = {};
const c2 = {};
const blendedRgb = { r: 0, g: 0, b: 0 };

export function blendPixiColor(color0: Integer, color1: Integer, factor: Unit) {
    const initialRgb = AdjustColor.pixi(color0).toRgb(c1);
    const targetRgb = AdjustColor.pixi(color1).toRgb(c2);

    blendedRgb.r = nlerp(initialRgb.r, targetRgb.r, factor);
    blendedRgb.g = nlerp(initialRgb.g, targetRgb.g, factor);
    blendedRgb.b = nlerp(initialRgb.b, targetRgb.b, factor);
    return AdjustColor.rgb(blendedRgb.r, blendedRgb.g, blendedRgb.b).toPixi();
}
