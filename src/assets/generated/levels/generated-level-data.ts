// This file is generated

import { OgmoEntityResolvers as r } from "../../../igua/ogmo/entity-resolvers";
import { OgmoFactory } from "../../../igua/ogmo/factory";
import { Tx } from "../../../assets/textures";

const { createEntity: e, createDecal: d, createLevel: l } = OgmoFactory;

export const Lvl = {
  Level1: l({ width: 512, height: 1064, backgroundTint: 0x184880 }, () => ({
    FxCloud: d(Tx.Fx.Cloud, { x: 56, y: 488, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "SkyDecals"),
    FxCloud_1: d(Tx.Fx.Cloud, { x: 200, y: 432, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "SkyDecals"),
    FxCloud_2: d(Tx.Fx.Cloud, { x: 456, y: 528, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "SkyDecals"),
    TerrainGrass1: d(Tx.Terrain.Grass1, { x: 142, y: 573, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xb82828 }, "BackgroundDecals"),
    TerrainGrass1_1: d(Tx.Terrain.Grass1, { x: 315, y: 541, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xb82828 }, "BackgroundDecals"),
    TerrainGrass1_2: d(Tx.Terrain.Grass1, { x: 347, y: 599, scaleX: -1, scaleY: 1, rotation: 95.45396357814825, originX: 0.5, originY: 0.5, tint: 0xb82828 }, "BackgroundDecals"),
    TerrainGrass1_3: d(Tx.Terrain.Grass1, { x: 284, y: 656, scaleX: 1, scaleY: -1, rotation: 179.39227393151708, originX: 0.5, originY: 0.5, tint: 0xb82828 }, "BackgroundDecals"),
    TerrainGrass1_4: d(Tx.Terrain.Grass1, { x: 175, y: 655, scaleX: 1, scaleY: -1, rotation: 179.39227393151708, originX: 0.5, originY: 0.5, tint: 0xb82828 }, "BackgroundDecals"),
    TerrainGrass2: d(Tx.Terrain.Grass2, { x: 182, y: 566, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x3f7a49 }, "BackgroundDecals"),
    TerrainGrass2_1: d(Tx.Terrain.Grass2, { x: 288, y: 537, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x659b6e }, "BackgroundDecals"),
    TerrainGrass2_2: d(Tx.Terrain.Grass2, { x: 18, y: 726, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x659b6e }, "BackgroundDecals"),
    TerrainGrass2_3: d(Tx.Terrain.Grass2, { x: 66, y: 726, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x3f7a49 }, "BackgroundDecals"),
    TerrainGrass2_4: d(Tx.Terrain.Grass2, { x: 147, y: 726, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x3f7a49 }, "BackgroundDecals"),
    TerrainGrass2_5: d(Tx.Terrain.Grass2, { x: 384, y: 693, scaleX: -1, scaleY: 1, rotation: -41.98830896466994, originX: 0.5, originY: 0.5, tint: 0x3f7a49 }, "BackgroundDecals"),
    TerrainGrass2_6: d(Tx.Terrain.Grass2, { x: 468, y: 679, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x659b6e }, "BackgroundDecals"),
    TerrainGrass2_7: d(Tx.Terrain.Grass2, { x: 496, y: 678, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x659b6e }, "BackgroundDecals"),
    TerrainGrass1_5: d(Tx.Terrain.Grass1, { x: 153, y: 798, scaleX: 1, scaleY: -1, rotation: 179.39227393151708, originX: 0.5, originY: 0.5, tint: 0x9f9a20 }, "BackgroundDecals"),
    TerrainGrass1_6: d(Tx.Terrain.Grass1, { x: 508, y: 726, scaleX: 1, scaleY: -1, rotation: 179.39227393151708, originX: 0.5, originY: 0.5, tint: 0x9f9a20 }, "BackgroundDecals"),
    TerrainGrass1_7: d(Tx.Terrain.Grass1, { x: 4, y: 782, scaleX: 1, scaleY: -1, rotation: 220.58719797403282, originX: 0.5, originY: 0.5, tint: 0x9f9a20 }, "BackgroundDecals"),
    TerrainGrass1_8: d(Tx.Terrain.Grass1, { x: 50, y: 734, scaleX: 1, scaleY: -1, rotation: 179.39227393151708, originX: 0.5, originY: 0.5, tint: 0x9f9a20 }, "BackgroundDecals"),
    TerrainGrass1_9: d(Tx.Terrain.Grass1, { x: 100, y: 750, scaleX: 1, scaleY: -1, rotation: 162.26812916229386, originX: 0.5, originY: 0.5, tint: 0x9f9a20 }, "BackgroundDecals"),
    TerrainGrass1_10: d(Tx.Terrain.Grass1, { x: 460, y: 685, scaleX: 1, scaleY: -1, rotation: 179.39227393151708, originX: 0.5, originY: 0.5, tint: 0x9f9a20 }, "BackgroundDecals"),
    Block: e(r["Block"], { x: 80, y: 576, width: 264, height: 80, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Slope: e(r["Slope"], { x: 232, y: 544, width: 32, height: 32, flippedX: false, flippedY: false, values: { name: "", depth: 0 }, tint: 0xb82828 }),
    Block_1: e(r["Block"], { x: 264, y: 544, width: 80, height: 32, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Block_2: e(r["Block"], { x: 0, y: 736, width: 160, height: 64, values: { name: "", depth: 0, visible: true }, tint: 0x9f9a20 }),
    Block_3: e(r["Block"], { x: 400, y: 688, width: 112, height: 40, values: { name: "", depth: 0, visible: true }, tint: 0x9f9a20 }),
    Slope_1: e(r["Slope"], { x: 352, y: 688, width: 48, height: 48, flippedX: false, flippedY: false, values: { name: "", depth: 0 }, tint: 0x9f9a20 }),
    Block_4: e(r["Block"], { x: 400, y: 728, width: 56, height: 32, values: { name: "", depth: 0, visible: true }, tint: 0x9f9a20 }),
    Slope_2: e(r["Slope"], { x: 456, y: 728, width: 32, height: 32, flippedX: true, flippedY: true, values: { name: "", depth: 0 }, tint: 0x9f9a20 }),
    Slope_3: e(r["Slope"], { x: 376, y: 736, width: 24, height: 24, flippedX: false, flippedY: true, values: { name: "", depth: 0 }, tint: 0x9f9a20 }),
    Slope_4: e(r["Slope"], { x: 160, y: 736, width: 64, height: 64, flippedX: true, flippedY: false, values: { name: "", depth: 0 }, tint: 0x9f9a20 }),
    Slope_5: e(r["Slope"], { x: 24, y: 800, width: 24, height: 24, flippedX: false, flippedY: true, values: { name: "", depth: 0 }, tint: 0x9f9a20 }),
    Slope_6: e(r["Slope"], { x: 112, y: 800, width: 24, height: 24, flippedX: true, flippedY: true, values: { name: "", depth: 0 }, tint: 0x9f9a20 }),
    Block_5: e(r["Block"], { x: 48, y: 800, width: 64, height: 24, values: { name: "", depth: 0, visible: true }, tint: 0x9f9a20 }),
    TerrainFishSkeleton: d(Tx.Terrain.FishSkeleton, { x: 280, y: 584, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "FrontDecals"),
    TerrainFishSkeleton_1: d(Tx.Terrain.FishSkeleton, { x: 120, y: 616, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "FrontDecals"),
    TerrainGrass2_8: d(Tx.Terrain.Grass2, { x: 332, y: 536, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x659b6e }, "FrontDecals"),
    TerrainGrass2_9: d(Tx.Terrain.Grass2, { x: 198, y: 566, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x659b6e }, "FrontDecals"),
    TerrainGrass2_10: d(Tx.Terrain.Grass2, { x: 97, y: 567, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x3f7a49 }, "FrontDecals"),
    TerrainGrass2_11: d(Tx.Terrain.Grass2, { x: 68, y: 594, scaleX: 1, scaleY: 1, rotation: -89.29071423229043, originX: 0.5, originY: 0.5, tint: 0x3f7a49 }, "FrontDecals"),
    TerrainGrass2_12: d(Tx.Terrain.Grass2, { x: 122, y: 726, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x3f7a49 }, "FrontDecals"),
    TerrainGrass2_13: d(Tx.Terrain.Grass2, { x: 74, y: 726, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x659b6e }, "FrontDecals"),
    Player: e(r["Player"], { x: 136, y: 536, values: { name: "", depth: 0 } }),
  })),
};
