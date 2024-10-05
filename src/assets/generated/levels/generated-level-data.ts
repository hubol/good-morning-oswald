// This file is generated

import { OgmoEntityResolvers as r } from "../../../igua/ogmo/entity-resolvers";
import { OgmoFactory } from "../../../igua/ogmo/factory";
import { Tx } from "../../../assets/textures";

const { createEntity: e, createDecal: d, createLevel: l } = OgmoFactory;

export const Lvl = {
  Level1: l({ width: 512, height: 1064, backgroundTint: 0x184880 }, () => ({
    FxCloud: d(Tx.Fx.Cloud, { x: 56, y: 488, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }),
    FxCloud_1: d(Tx.Fx.Cloud, { x: 200, y: 432, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }),
    FxCloud_2: d(Tx.Fx.Cloud, { x: 456, y: 528, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }),
    TerrainGrass1: d(Tx.Terrain.Grass1, { x: 142, y: 573, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xb82828 }),
    TerrainGrass1_1: d(Tx.Terrain.Grass1, { x: 315, y: 541, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xb82828 }),
    TerrainGrass1_2: d(Tx.Terrain.Grass1, { x: 347, y: 599, scaleX: -1, scaleY: 1, rotation: 95.45396357814825, originX: 0.5, originY: 0.5, tint: 0xb82828 }),
    TerrainGrass1_3: d(Tx.Terrain.Grass1, { x: 284, y: 656, scaleX: 1, scaleY: -1, rotation: 179.39227393151708, originX: 0.5, originY: 0.5, tint: 0xb82828 }),
    TerrainGrass1_4: d(Tx.Terrain.Grass1, { x: 175, y: 655, scaleX: 1, scaleY: -1, rotation: 179.39227393151708, originX: 0.5, originY: 0.5, tint: 0xb82828 }),
    Block: e(r["Block"], { x: 80, y: 576, width: 264, height: 80, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Slope: e(r["Slope"], { x: 232, y: 544, width: 32, height: 32, flippedX: false, flippedY: false, values: { name: "", depth: 0 }, tint: 0xb82828 }),
    Block_1: e(r["Block"], { x: 264, y: 544, width: 80, height: 32, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Player: e(r["Player"], { x: 144, y: 560, flippedX: false, values: { name: "", depth: 0 } }),
  })),
};
