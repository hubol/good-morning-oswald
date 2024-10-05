// This file is generated

import { OgmoEntityResolvers as r } from "../../../igua/ogmo/entity-resolvers";
import { OgmoFactory } from "../../../igua/ogmo/factory";
import { Tx } from "../../../assets/textures";

const { createEntity: e, createDecal: d, createLevel: l } = OgmoFactory;

export const Lvl = {
  Level1: l({ width: 512, height: 1064, backgroundTint: 0x184880 }, () => ({
    Block: e(r["Block"], { x: 80, y: 576, width: 264, height: 80, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Slope: e(r["Slope"], { x: 232, y: 544, width: 32, height: 32, flippedX: false, flippedY: false, values: { name: "", depth: 0 }, tint: 0xb82828 }),
    Block_1: e(r["Block"], { x: 264, y: 544, width: 80, height: 32, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Player: e(r["Player"], { x: 144, y: 560, flippedX: false, values: { name: "", depth: 0 } }),
  })),
};
