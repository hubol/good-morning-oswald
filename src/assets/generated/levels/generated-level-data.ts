// This file is generated

import { OgmoEntityResolvers as r } from "../../../igua/ogmo/entity-resolvers";
import { OgmoFactory } from "../../../igua/ogmo/factory";
import { Tx } from "../../../assets/textures";

const { createEntity: e, createDecal: d, createLevel: l } = OgmoFactory;

export const Lvl = {
  Home: l({ width: 512, height: 256, backgroundTint: 0x3e1512 }, () => ({
    HomeCrack: d(Tx.Home.Crack, { x: 80, y: 168, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x000000 }, "BackgroundDecals"),
    HomePoster: d(Tx.Home.Poster, { x: 99, y: 111, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "BackgroundDecals"),
    TerrainGrass1: d(Tx.Terrain.Grass1, { x: 88, y: 195, scaleX: 1, scaleY: -1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x000000 }, "BackgroundDecals"),
    TerrainGrass1_1: d(Tx.Terrain.Grass1, { x: 200, y: 195, scaleX: 1, scaleY: -1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x000000 }, "BackgroundDecals"),
    TerrainGrass1_2: d(Tx.Terrain.Grass1, { x: 312, y: 195, scaleX: -1, scaleY: -1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x000000 }, "BackgroundDecals"),
    TerrainGrass1_3: d(Tx.Terrain.Grass1, { x: 408, y: 195, scaleX: -1, scaleY: -1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x000000 }, "BackgroundDecals"),
    TerrainGrass1_4: d(Tx.Terrain.Grass1, { x: 520, y: 195, scaleX: -1, scaleY: -1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x000000 }, "BackgroundDecals"),
    TerrainGrass1_5: d(Tx.Terrain.Grass1, { x: 408, y: 62, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x000000 }, "BackgroundDecals"),
    TerrainGrass1_6: d(Tx.Terrain.Grass1, { x: 296, y: 62, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x000000 }, "BackgroundDecals"),
    TerrainGrass1_7: d(Tx.Terrain.Grass1, { x: 200, y: 62, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x000000 }, "BackgroundDecals"),
    TerrainGrass1_8: d(Tx.Terrain.Grass1, { x: 88, y: 62, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x000000 }, "BackgroundDecals"),
    TerrainGrass1_9: d(Tx.Terrain.Grass1, { x: 504, y: 99, scaleX: 1, scaleY: -1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x000000 }, "BackgroundDecals"),
    TerrainGrass3: d(Tx.Terrain.Grass3, { x: 48, y: 80, scaleX: 1, scaleY: 1, rotation: -41.03346380592427, originX: 0.5, originY: 0.5, tint: 0x000000 }, "BackgroundDecals"),
    TerrainGrass3_1: d(Tx.Terrain.Grass3, { x: 432, y: 80, scaleX: 1, scaleY: 1, rotation: 45, originX: 0.5, originY: 0.5, tint: 0x000000 }, "BackgroundDecals"),
    TerrainGrass1_10: d(Tx.Terrain.Grass1, { x: 32, y: 131, scaleX: 1, scaleY: -1, rotation: 90, originX: 0.5, originY: 0.5, tint: 0x000000 }, "BackgroundDecals"),
    HomeWindow: d(Tx.Home.Window, { x: 201, y: 131, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x826995 }, "BackgroundDecals"),
    HomeCrack_1: d(Tx.Home.Crack, { x: 376, y: 168, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x000000 }, "BackgroundDecals"),
    HomeCrack_2: d(Tx.Home.Crack, { x: 344, y: 64, scaleX: 1, scaleY: 1, rotation: -157.3660509229303, originX: 0.5, originY: 0.5, tint: 0x000000 }, "BackgroundDecals"),
    Block: e(r["Block"], { x: 0, y: 0, width: 512, height: 64, values: { name: "", depth: 0, visible: true }, tint: 0x000000 }),
    Block_1: e(r["Block"], { x: 0, y: 192, width: 672, height: 64, values: { name: "", depth: 0, visible: true }, tint: 0x000000 }),
    Block_2: e(r["Block"], { x: 0, y: 64, width: 32, height: 128, values: { name: "", depth: 0, visible: true }, tint: 0x000000 }),
    Slope: e(r["Slope"], { x: 32, y: 64, width: 32, height: 32, flippedX: true, flippedY: true, values: { name: "", depth: 0 }, tint: 0x000000 }),
    Slope_1: e(r["Slope"], { x: 416, y: 64, width: 32, height: 32, flippedX: false, flippedY: true, values: { name: "", depth: 0 }, tint: 0x000000 }),
    Block_3: e(r["Block"], { x: 448, y: 64, width: 64, height: 32, values: { name: "", depth: 0, visible: true }, tint: 0x000000 }),
    Gate: e(r["Gate"], { x: 496, y: 96, width: 104, height: 96, values: { sceneName: "scnLevel1", name: "" } }),
    HomeGoodMorning: d(Tx.Home.GoodMorning, { x: 256, y: 64, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "FrontDecals"),
    HomeWindowLight: d(Tx.Home.WindowLight, { x: 162, y: 151, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffdeb8 }, "FrontDecals"),
    HomeCobweb: d(Tx.Home.Cobweb, { x: 52, y: 175, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x636363 }, "FrontDecals"),
    HomeTelephone: d(Tx.Home.Telephone, { x: 359, y: 170, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "FrontDecals"),
    TelephoneLed: d(Tx.Home.TelephoneLed, { x: 370, y: 156, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "FrontDecals"),
    Player: e(r["Player"], { x: 160, y: 186, values: { name: "", depth: 0 } }),
  })),
  Level1: l({ width: 512, height: 1544, backgroundTint: 0x184880 }, () => ({
    FxCloud: d(Tx.Fx.Cloud, { x: 56, y: 736, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "SkyDecals"),
    FxCloud_1: d(Tx.Fx.Cloud, { x: 200, y: 680, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "SkyDecals"),
    FxCloud_2: d(Tx.Fx.Cloud, { x: 456, y: 776, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "SkyDecals"),
    FxCloud_3: d(Tx.Fx.Cloud, { x: 264, y: 880, scaleX: 4, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x2181b7 }, "SkyDecals"),
    ShapesSquare32: d(Tx.Shapes.Square32, { x: -8, y: 880, scaleX: 19, scaleY: 14, rotation: 0, originX: 0, originY: 0, tint: 0x2181b7 }, "SkyDecals"),
    FxCloud_4: d(Tx.Fx.Cloud, { x: 288, y: 864, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "SkyDecals"),
    FxCloud_5: d(Tx.Fx.Cloud, { x: 88, y: 952, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "SkyDecals"),
    FxCloud_6: d(Tx.Fx.Cloud, { x: 464, y: 352, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "SkyDecals"),
    FxCloud_7: d(Tx.Fx.Cloud, { x: 320, y: 408, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "SkyDecals"),
    ShapesLineVertical16: d(Tx.Shapes.LineVertical16, { x: 309, y: 337, scaleX: 2, scaleY: 1, rotation: 45, originX: 0.5, originY: 0.5, tint: 0xffffff }, "SkyDecals"),
    FxSwirl: d(Tx.Fx.Swirl, { x: 285, y: 316, scaleX: 0.5, scaleY: 0.5, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "SkyDecals"),
    ShapesLineVertical16_1: d(Tx.Shapes.LineVertical16, { x: 298, y: 336, scaleX: 2, scaleY: 1, rotation: -45, originX: 0.5, originY: 0.5, tint: 0xffffff }, "SkyDecals"),
    FxSwirl_1: d(Tx.Fx.Swirl, { x: 317, y: 316, scaleX: 0.5, scaleY: 0.5, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "SkyDecals"),
    ShapesTriangle128: d(Tx.Shapes.Triangle128, { x: 56, y: 272, scaleX: 2, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x600c0c }, "BackgroundDecals"),
    TerrainGrass3: d(Tx.Terrain.Grass3, { x: 194, y: 431, scaleX: -1, scaleY: 1, rotation: 273.96739317785557, originX: 0.5, originY: 0.5, tint: 0x666666 }, "BackgroundDecals"),
    TerrainGrass3_1: d(Tx.Terrain.Grass3, { x: 162, y: 335, scaleX: 1, scaleY: 1, rotation: 179.80947500855697, originX: 0.5, originY: 0.5, tint: 0x666666 }, "BackgroundDecals"),
    TerrainGrass3_2: d(Tx.Terrain.Grass3, { x: -102, y: 335, scaleX: 1, scaleY: 1, rotation: 179.80947500855697, originX: 0.5, originY: 0.5, tint: 0x666666 }, "BackgroundDecals"),
    TerrainGrass3_3: d(Tx.Terrain.Grass3, { x: -46, y: 335, scaleX: -1, scaleY: 1, rotation: 179.80947500855697, originX: 0.5, originY: 0.5, tint: 0x666666 }, "BackgroundDecals"),
    TerrainGrass3_4: d(Tx.Terrain.Grass3, { x: 2, y: 335, scaleX: 1, scaleY: 1, rotation: 179.80947500855697, originX: 0.5, originY: 0.5, tint: 0x666666 }, "BackgroundDecals"),
    ShapesSquare32_1: d(Tx.Shapes.Square32, { x: -8, y: 336, scaleX: 6.3, scaleY: 6, rotation: 0, originX: 0, originY: 0, tint: 0x666666 }, "BackgroundDecals"),
    TerrainGrass1: d(Tx.Terrain.Grass1, { x: 142, y: 821, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xb82828 }, "BackgroundDecals"),
    TerrainGrass1_1: d(Tx.Terrain.Grass1, { x: 315, y: 789, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xb82828 }, "BackgroundDecals"),
    TerrainGrass1_2: d(Tx.Terrain.Grass1, { x: 347, y: 847, scaleX: -1, scaleY: 1, rotation: 95.45396357814825, originX: 0.5, originY: 0.5, tint: 0xb82828 }, "BackgroundDecals"),
    TerrainGrass1_3: d(Tx.Terrain.Grass1, { x: 284, y: 904, scaleX: 1, scaleY: -1, rotation: 179.39227393151708, originX: 0.5, originY: 0.5, tint: 0xb82828 }, "BackgroundDecals"),
    TerrainGrass1_4: d(Tx.Terrain.Grass1, { x: 175, y: 903, scaleX: 1, scaleY: -1, rotation: 179.39227393151708, originX: 0.5, originY: 0.5, tint: 0xb82828 }, "BackgroundDecals"),
    TerrainGrass2: d(Tx.Terrain.Grass2, { x: 182, y: 814, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x3f7a49 }, "BackgroundDecals"),
    TerrainGrass2_1: d(Tx.Terrain.Grass2, { x: 288, y: 785, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x659b6e }, "BackgroundDecals"),
    TerrainGrass2_2: d(Tx.Terrain.Grass2, { x: 18, y: 974, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x659b6e }, "BackgroundDecals"),
    TerrainGrass2_3: d(Tx.Terrain.Grass2, { x: 66, y: 974, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x3f7a49 }, "BackgroundDecals"),
    TerrainGrass2_4: d(Tx.Terrain.Grass2, { x: 147, y: 974, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x3f7a49 }, "BackgroundDecals"),
    TerrainGrass2_5: d(Tx.Terrain.Grass2, { x: 384, y: 941, scaleX: -1, scaleY: 1, rotation: -41.98830896466994, originX: 0.5, originY: 0.5, tint: 0x3f7a49 }, "BackgroundDecals"),
    TerrainGrass2_6: d(Tx.Terrain.Grass2, { x: 468, y: 927, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x659b6e }, "BackgroundDecals"),
    TerrainGrass2_7: d(Tx.Terrain.Grass2, { x: 496, y: 926, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x659b6e }, "BackgroundDecals"),
    TerrainGrass1_5: d(Tx.Terrain.Grass1, { x: 153, y: 1046, scaleX: 1, scaleY: -1, rotation: 179.39227393151708, originX: 0.5, originY: 0.5, tint: 0x9f9a20 }, "BackgroundDecals"),
    TerrainGrass1_6: d(Tx.Terrain.Grass1, { x: 508, y: 974, scaleX: 1, scaleY: -1, rotation: 179.39227393151708, originX: 0.5, originY: 0.5, tint: 0x9f9a20 }, "BackgroundDecals"),
    TerrainGrass1_7: d(Tx.Terrain.Grass1, { x: 4, y: 1030, scaleX: 1, scaleY: -1, rotation: 220.58719797403282, originX: 0.5, originY: 0.5, tint: 0x9f9a20 }, "BackgroundDecals"),
    TerrainGrass1_8: d(Tx.Terrain.Grass1, { x: 50, y: 982, scaleX: 1, scaleY: -1, rotation: 179.39227393151708, originX: 0.5, originY: 0.5, tint: 0x9f9a20 }, "BackgroundDecals"),
    TerrainGrass1_9: d(Tx.Terrain.Grass1, { x: 100, y: 998, scaleX: 1, scaleY: -1, rotation: 162.26812916229386, originX: 0.5, originY: 0.5, tint: 0x9f9a20 }, "BackgroundDecals"),
    TerrainGrass1_10: d(Tx.Terrain.Grass1, { x: 460, y: 933, scaleX: 1, scaleY: -1, rotation: 179.39227393151708, originX: 0.5, originY: 0.5, tint: 0x9f9a20 }, "BackgroundDecals"),
    HomeBrick: d(Tx.Home.Brick, { x: 120, y: 497, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x9c9c9c }, "BackgroundDecals"),
    HomeBrick_1: d(Tx.Home.Brick, { x: -31, y: 496, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xbebebe }, "BackgroundDecals"),
    HomeBrick_2: d(Tx.Home.Brick, { x: -102, y: 462, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x9c9c9c }, "BackgroundDecals"),
    HomeBrick_3: d(Tx.Home.Brick, { x: 49, y: 462, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xbebebe }, "BackgroundDecals"),
    HomeBrickHalf: d(Tx.Home.BrickHalf, { x: 154, y: 461, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xbebebe }, "BackgroundDecals"),
    HomeBrick_4: d(Tx.Home.Brick, { x: 119, y: 426, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x9c9c9c }, "BackgroundDecals"),
    HomeBrick_5: d(Tx.Home.Brick, { x: -32, y: 426, scaleX: 1, scaleY: -1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xbebebe }, "BackgroundDecals"),
    HomeBrick_6: d(Tx.Home.Brick, { x: -33, y: 355, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x9c9c9c }, "BackgroundDecals"),
    HomeBrick_7: d(Tx.Home.Brick, { x: 118, y: 355, scaleX: 1, scaleY: -1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x9c9c9c }, "BackgroundDecals"),
    HomeBrickHalf_1: d(Tx.Home.BrickHalf, { x: 153, y: 391, scaleX: -1, scaleY: -1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xbebebe }, "BackgroundDecals"),
    HomeBrick_8: d(Tx.Home.Brick, { x: 48, y: 391, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xbebebe }, "BackgroundDecals"),
    HomeBrick_9: d(Tx.Home.Brick, { x: -103, y: 391, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xbebebe }, "BackgroundDecals"),
    TerrainGrass3_5: d(Tx.Terrain.Grass3, { x: 194, y: 487, scaleX: 1, scaleY: 1, rotation: 273.96739317785557, originX: 0.5, originY: 0.5, tint: 0x666666 }, "BackgroundDecals"),
    TerrainGrass3_6: d(Tx.Terrain.Grass3, { x: 194, y: 367, scaleX: 1, scaleY: 1, rotation: 273.96739317785557, originX: 0.5, originY: 0.5, tint: 0x666666 }, "BackgroundDecals"),
    TerrainGrass3_7: d(Tx.Terrain.Grass3, { x: 58, y: 335, scaleX: 1, scaleY: 1, rotation: 179.80947500855697, originX: 0.5, originY: 0.5, tint: 0x600c0c }, "BackgroundDecals"),
    TerrainGrass3_8: d(Tx.Terrain.Grass3, { x: 16, y: 512, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x480707 }, "BackgroundDecals"),
    TerrainGrass1_11: d(Tx.Terrain.Grass1, { x: 104, y: 512, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x480707 }, "BackgroundDecals"),
    TerrainGrass3_9: d(Tx.Terrain.Grass3, { x: 192, y: 512, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x480707 }, "BackgroundDecals"),
    TerrainGrass1_12: d(Tx.Terrain.Grass1, { x: 47, y: 622, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x480707 }, "BackgroundDecals"),
    TerrainGrass1_13: d(Tx.Terrain.Grass1, { x: 194, y: 598, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x480707 }, "BackgroundDecals"),
    TerrainGrass3_10: d(Tx.Terrain.Grass3, { x: 154, y: 319, scaleX: 1, scaleY: 1, rotation: 209.41093529586365, originX: 0.5, originY: 0.5, tint: 0x600c0c }, "BackgroundDecals"),
    TerrainGrass3_11: d(Tx.Terrain.Grass3, { x: 106, y: 295, scaleX: -1, scaleY: 1, rotation: 209.41093529586365, originX: 0.5, originY: 0.5, tint: 0x600c0c }, "BackgroundDecals"),
    TerrainGrass3_12: d(Tx.Terrain.Grass3, { x: 10, y: 247, scaleX: -1, scaleY: 1, rotation: 209.41093529586365, originX: 0.5, originY: 0.5, tint: 0x600c0c }, "BackgroundDecals"),
    TerrainGrass3_13: d(Tx.Terrain.Grass3, { x: 58, y: 271, scaleX: 1, scaleY: 1, rotation: 209.41093529586365, originX: 0.5, originY: 0.5, tint: 0x600c0c }, "BackgroundDecals"),
    HomeShingles: d(Tx.Home.Shingles, { x: 16, y: 288, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e2727 }, "BackgroundDecals"),
    HomeShingles_1: d(Tx.Home.Shingles, { x: 83, y: 315, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e2727 }, "BackgroundDecals"),
    TerrainGrass3_14: d(Tx.Terrain.Grass3, { x: 114, y: 335, scaleX: -1, scaleY: 1, rotation: 179.80947500855697, originX: 0.5, originY: 0.5, tint: 0x666666 }, "BackgroundDecals"),
    FxSparkle: d(Tx.Fx.Sparkle, { x: 180, y: 349, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x666666 }, "BackgroundDecals"),
    FxSparkle_1: d(Tx.Fx.Sparkle, { x: 137, y: 419, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x666666 }, "BackgroundDecals"),
    HomeMailbox: d(Tx.Home.Mailbox, { x: 244, y: 476, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "BackgroundDecals"),
    ShapesSquare32_2: d(Tx.Shapes.Square32, { x: 44, y: 409, scaleX: 3.25, scaleY: 3.3, rotation: 0, originX: 0, originY: 0, tint: 0x666666 }, "BackgroundDecals"),
    TerrainGrass3_15: d(Tx.Terrain.Grass3, { x: 45, y: 483, scaleX: -1, scaleY: 1, rotation: 273.96739317785557, originX: 0.5, originY: 0.5, tint: 0x666666 }, "BackgroundDecals"),
    TerrainGrass3_16: d(Tx.Terrain.Grass3, { x: 43, y: 437, scaleX: -1, scaleY: 1, rotation: 273.96739317785557, originX: 0.5, originY: 0.5, tint: 0x666666 }, "BackgroundDecals"),
    TerrainGrass3_17: d(Tx.Terrain.Grass3, { x: 149, y: 438, scaleX: -1, scaleY: 1, rotation: 273.96739317785557, originX: 0.5, originY: 0.5, tint: 0x666666 }, "BackgroundDecals"),
    TerrainGrass3_18: d(Tx.Terrain.Grass3, { x: 71, y: 409, scaleX: -1, scaleY: 1, rotation: 359.07988419070506, originX: 0.5, originY: 0.5, tint: 0x666666 }, "BackgroundDecals"),
    ShapesSquare32_3: d(Tx.Shapes.Square32, { x: 48, y: 415, scaleX: 2.7, scaleY: 3.1, rotation: 0, originX: 0, originY: 0, tint: 0x565656 }, "BackgroundDecals"),
    ShapesSquare32_4: d(Tx.Shapes.Square32, { x: 53, y: 423, scaleX: 2.2, scaleY: 3.1, rotation: 0, originX: 0, originY: 0, tint: 0x3e3e3e }, "BackgroundDecals"),
    TerrainGrass1_14: d(Tx.Terrain.Grass1, { x: 305, y: 1142, scaleX: 1, scaleY: -1, rotation: 179.39227393151708, originX: 0.5, originY: 0.5, tint: 0x2850b8 }, "BackgroundDecals"),
    TerrainGrass1_15: d(Tx.Terrain.Grass1, { x: 417, y: 1142, scaleX: 1, scaleY: -1, rotation: 179.39227393151708, originX: 0.5, originY: 0.5, tint: 0x2850b8 }, "BackgroundDecals"),
    TerrainGrass1_16: d(Tx.Terrain.Grass1, { x: 305, y: 1206, scaleX: 1, scaleY: -1, rotation: 179.39227393151708, originX: 0.5, originY: 0.5, tint: 0x2850b8 }, "BackgroundDecals"),
    TerrainGrass1_17: d(Tx.Terrain.Grass1, { x: 417, y: 1206, scaleX: 1, scaleY: -1, rotation: 179.39227393151708, originX: 0.5, originY: 0.5, tint: 0x2850b8 }, "BackgroundDecals"),
    TerrainGrass1_18: d(Tx.Terrain.Grass1, { x: 231, y: 1225, scaleX: 1, scaleY: -1, rotation: 133.19115163323664, originX: 0.5, originY: 0.5, tint: 0x2850b8 }, "BackgroundDecals"),
    MailboxHitbox: d(Tx.Shapes.Square32, { x: 244, y: 462, scaleX: 1, scaleY: 0.2, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xc6aec6 }, "BackgroundDecals"),
    Block: e(r["Block"], { x: 80, y: 824, width: 264, height: 80, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Slope: e(r["Slope"], { x: 232, y: 792, width: 32, height: 32, flippedX: false, flippedY: false, values: { name: "", depth: 0 }, tint: 0xb82828 }),
    Block_1: e(r["Block"], { x: 264, y: 792, width: 80, height: 32, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Block_2: e(r["Block"], { x: 0, y: 984, width: 160, height: 64, values: { name: "", depth: 0, visible: true }, tint: 0x9f9a20 }),
    Block_3: e(r["Block"], { x: 400, y: 936, width: 112, height: 40, values: { name: "", depth: 0, visible: true }, tint: 0x9f9a20 }),
    Slope_1: e(r["Slope"], { x: 352, y: 936, width: 48, height: 48, flippedX: false, flippedY: false, values: { name: "", depth: 0 }, tint: 0x9f9a20 }),
    Block_4: e(r["Block"], { x: 400, y: 976, width: 56, height: 32, values: { name: "", depth: 0, visible: true }, tint: 0x9f9a20 }),
    Slope_2: e(r["Slope"], { x: 456, y: 976, width: 32, height: 32, flippedX: true, flippedY: true, values: { name: "", depth: 0 }, tint: 0x9f9a20 }),
    Slope_3: e(r["Slope"], { x: 376, y: 984, width: 24, height: 24, flippedX: false, flippedY: true, values: { name: "", depth: 0 }, tint: 0x9f9a20 }),
    Slope_4: e(r["Slope"], { x: 160, y: 984, width: 64, height: 64, flippedX: true, flippedY: false, values: { name: "", depth: 0 }, tint: 0x9f9a20 }),
    Slope_5: e(r["Slope"], { x: 24, y: 1048, width: 24, height: 24, flippedX: false, flippedY: true, values: { name: "", depth: 0 }, tint: 0x9f9a20 }),
    Slope_6: e(r["Slope"], { x: 112, y: 1048, width: 24, height: 24, flippedX: true, flippedY: true, values: { name: "", depth: 0 }, tint: 0x9f9a20 }),
    Block_5: e(r["Block"], { x: 48, y: 1048, width: 64, height: 24, values: { name: "", depth: 0, visible: true }, tint: 0x9f9a20 }),
    Block_6: e(r["Block"], { x: 440, y: 824, width: 48, height: 48, values: { name: "", depth: 0, visible: true }, tint: 0xb87e28 }),
    Block_7: e(r["Block"], { x: 344, y: 872, width: 50, height: 32, values: { name: "", depth: 0, visible: true }, tint: 0xb87e28 }),
    Block_8: e(r["Block"], { x: 0, y: 512, width: 256, height: 88, values: { name: "", depth: 0, visible: true }, tint: 0x480707 }),
    Block_9: e(r["Block"], { x: 256, y: 536, width: 112, height: 24, values: { name: "", depth: 0, visible: true }, tint: 0x480707 }),
    Slope_7: e(r["Slope"], { x: 256, y: 512, width: 24, height: 24, flippedX: true, flippedY: false, values: { name: "", depth: 0 }, tint: 0x480707 }),
    Slope_8: e(r["Slope"], { x: 256, y: 560, width: 24, height: 24, flippedX: true, flippedY: true, values: { name: "", depth: 0 }, tint: 0x480707 }),
    Slope_9: e(r["Slope"], { x: 112, y: 600, width: 24, height: 24, flippedX: true, flippedY: true, values: { name: "", depth: 0 }, tint: 0x480707 }),
    Block_10: e(r["Block"], { x: 0, y: 600, width: 112, height: 24, values: { name: "", depth: 0, visible: true }, tint: 0x480707 }),
    Block_11: e(r["Block"], { x: -56, y: 224, width: 32, height: 960, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Block_12: e(r["Block"], { x: 536, y: 248, width: 40, height: 1296, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Block_13: e(r["Block"], { x: 248, y: 1144, width: 288, height: 64, values: { name: "", depth: 0, visible: true }, tint: 0x2850b8 }),
    Slope_10: e(r["Slope"], { x: 184, y: 1144, width: 64, height: 64, flippedX: false, flippedY: false, values: { name: "", depth: 0 }, tint: 0x2850b8 }),
    Slope_11: e(r["Slope"], { x: 184, y: 1208, width: 64, height: 64, flippedX: true, flippedY: true, values: { name: "", depth: 0 }, tint: 0x2850b8 }),
    Slope_12: e(r["Slope"], { x: 120, y: 1208, width: 64, height: 64, flippedX: false, flippedY: true, values: { name: "", depth: 0 }, tint: 0x2850b8 }),
    Block_14: e(r["Block"], { x: -56, y: -8, width: 32, height: 232, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Block_15: e(r["Block"], { x: 536, y: 16, width: 32, height: 232, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Block_16: e(r["Block"], { x: -24, y: 1280, width: 72, height: 40, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Block_17: e(r["Block"], { x: -128, y: 1160, width: 72, height: 24, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Block_18: e(r["Block"], { x: -160, y: 1160, width: 32, height: 160, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Block_19: e(r["Block"], { x: -128, y: 1280, width: 104, height: 40, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Money: e(r["Money"], { x: 13, y: 1077, uid: 172824643084100, values: { name: "" } }),
    Money_1: e(r["Money"], { x: 302, y: 289, uid: 172824644026701, values: { name: "" } }),
    Money_2: e(r["Money"], { x: 304, y: 30, uid: 172824645277002, values: { name: "" } }),
    Money_3: e(r["Money"], { x: 356, y: 31, uid: 172824645539603, values: { name: "" } }),
    Money_4: e(r["Money"], { x: 262, y: 28, uid: 172824645748804, values: { name: "" } }),
    Money_5: e(r["Money"], { x: 217, y: 27, uid: 172824645956605, values: { name: "" } }),
    Money_6: e(r["Money"], { x: 472, y: 1112, uid: 172824646816106, values: { name: "" } }),
    Money_7: e(r["Money"], { x: -103, y: 1259, uid: 172824647169407, values: { name: "" } }),
    Money_8: e(r["Money"], { x: -73, y: 1227, uid: 172824647869908, values: { name: "" } }),
    Money_9: e(r["Money"], { x: -45, y: 1260, uid: 172824648059609, values: { name: "" } }),
    Money_10: e(r["Money"], { x: 507, y: 1074, uid: 172824648961110, values: { name: "" } }),
    Money_11: e(r["Money"], { x: 312, y: 744, uid: 172824688177300, values: { name: "" } }),
    Block_20: e(r["Block"], { x: -24, y: 984, width: 24, height: 64, values: { name: "", depth: 0, visible: true }, tint: 0x9f9a20 }),
    TerrainFishSkeleton: d(Tx.Terrain.FishSkeleton, { x: 280, y: 832, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "FrontDecals"),
    TerrainFishSkeleton_1: d(Tx.Terrain.FishSkeleton, { x: 120, y: 864, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "FrontDecals"),
    TerrainGrass2_8: d(Tx.Terrain.Grass2, { x: 332, y: 784, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x659b6e }, "FrontDecals"),
    TerrainGrass2_9: d(Tx.Terrain.Grass2, { x: 198, y: 814, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x659b6e }, "FrontDecals"),
    TerrainGrass2_10: d(Tx.Terrain.Grass2, { x: 97, y: 815, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x3f7a49 }, "FrontDecals"),
    TerrainGrass2_11: d(Tx.Terrain.Grass2, { x: 68, y: 842, scaleX: 1, scaleY: 1, rotation: -89.29071423229043, originX: 0.5, originY: 0.5, tint: 0x3f7a49 }, "FrontDecals"),
    TerrainGrass2_12: d(Tx.Terrain.Grass2, { x: 122, y: 974, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x3f7a49 }, "FrontDecals"),
    TerrainGrass2_13: d(Tx.Terrain.Grass2, { x: 74, y: 974, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x659b6e }, "FrontDecals"),
    FxLump: d(Tx.Fx.Lump, { x: 184, y: 848, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xa31010 }, "FrontDecals"),
    FxLump_1: d(Tx.Fx.Lump, { x: 304, y: 882, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xa31010 }, "FrontDecals"),
    FxLump_2: d(Tx.Fx.Lump, { x: 37, y: 1025, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e7900 }, "FrontDecals"),
    FxLump_3: d(Tx.Fx.Lump, { x: 484, y: 956, scaleX: 1, scaleY: -1, rotation: -17.121740261219124, originX: 0.5, originY: 0.5, tint: 0x7e7900 }, "FrontDecals"),
    TerrainGrass3_19: d(Tx.Terrain.Grass3, { x: 464, y: 824, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xb87e28 }, "FrontDecals"),
    TerrainGrass3_20: d(Tx.Terrain.Grass3, { x: 464, y: 872, scaleX: 1, scaleY: -1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xb87e28 }, "FrontDecals"),
    TerrainGrass3_21: d(Tx.Terrain.Grass3, { x: 488, y: 848, scaleX: 1, scaleY: -1, rotation: -88.54711343788402, originX: 0.5, originY: 0.5, tint: 0xb87e28 }, "FrontDecals"),
    TerrainGrass3_22: d(Tx.Terrain.Grass3, { x: 440, y: 848, scaleX: 1, scaleY: -1, rotation: -88.54711343788402, originX: 0.5, originY: 0.5, tint: 0xb87e28 }, "FrontDecals"),
    TerrainGrass2_14: d(Tx.Terrain.Grass2, { x: 479, y: 809, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x75754a }, "FrontDecals"),
    TerrainGrass3_23: d(Tx.Terrain.Grass3, { x: 343, y: 880, scaleX: 1, scaleY: -1, rotation: -88.54711343788402, originX: 0.5, originY: 0.5, tint: 0xb87e28 }, "FrontDecals"),
    TerrainGrass3_24: d(Tx.Terrain.Grass3, { x: 369, y: 872, scaleX: 1, scaleY: -1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xb87e28 }, "FrontDecals"),
    TerrainGrass3_25: d(Tx.Terrain.Grass3, { x: 369, y: 904, scaleX: 1, scaleY: -1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xb87e28 }, "FrontDecals"),
    FxSparkle_2: d(Tx.Fx.Sparkle, { x: 320, y: 816, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xa31010 }, "FrontDecals"),
    FxSparkle_3: d(Tx.Fx.Sparkle, { x: 257, y: 830, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xa31010 }, "FrontDecals"),
    FxSparkle_4: d(Tx.Fx.Sparkle, { x: 204, y: 874, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xa31010 }, "FrontDecals"),
    FxSparkle_5: d(Tx.Fx.Sparkle, { x: 96, y: 889, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xa31010 }, "FrontDecals"),
    FxSparkle_6: d(Tx.Fx.Sparkle, { x: 406, y: 952, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e7900 }, "FrontDecals"),
    FxSparkle_7: d(Tx.Fx.Sparkle, { x: 438, y: 973, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e7900 }, "FrontDecals"),
    FxSparkle_8: d(Tx.Fx.Sparkle, { x: 414, y: 991, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e7900 }, "FrontDecals"),
    FxSparkle_9: d(Tx.Fx.Sparkle, { x: 143, y: 1004, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e7900 }, "FrontDecals"),
    FxSparkle_10: d(Tx.Fx.Sparkle, { x: 195, y: 1035, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e7900 }, "FrontDecals"),
    FxSparkle_11: d(Tx.Fx.Sparkle, { x: 112, y: 1058, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e7900 }, "FrontDecals"),
    FxSparkle_12: d(Tx.Fx.Sparkle, { x: 477, y: 840, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x955e0d }, "FrontDecals"),
    FxSparkle_13: d(Tx.Fx.Sparkle, { x: 381, y: 888, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x955e0d }, "FrontDecals"),
    TerrainGrass2_15: d(Tx.Terrain.Grass2, { x: 191, y: 500, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x1b4817 }, "FrontDecals"),
    TerrainGrass2_16: d(Tx.Terrain.Grass2, { x: 177, y: 501, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x3a8133 }, "FrontDecals"),
    TerrainGrass2_17: d(Tx.Terrain.Grass2, { x: 203, y: 507, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x3a8133 }, "FrontDecals"),
    TerrainGrass2_18: d(Tx.Terrain.Grass2, { x: 27, y: 507, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x3a8133 }, "FrontDecals"),
    TerrainGrass2_19: d(Tx.Terrain.Grass2, { x: 15, y: 500, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x1b4817 }, "FrontDecals"),
    TerrainGrass2_20: d(Tx.Terrain.Grass2, { x: 1, y: 501, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x3a8133 }, "FrontDecals"),
    FxSparkle_14: d(Tx.Fx.Sparkle, { x: 256, y: 528, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x923e0f }, "FrontDecals"),
    FxSparkle_15: d(Tx.Fx.Sparkle, { x: 240, y: 584, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x923e0f }, "FrontDecals"),
    FxSparkle_16: d(Tx.Fx.Sparkle, { x: 112, y: 608, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x923e0f }, "FrontDecals"),
    FxSparkle_17: d(Tx.Fx.Sparkle, { x: 144, y: 528, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x923e0f }, "FrontDecals"),
    TerrainGrass2_21: d(Tx.Terrain.Grass2, { x: 239, y: 503, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x3a8133 }, "FrontDecals"),
    ShapesSquare32_5: d(Tx.Shapes.Square32, { x: 80, y: 560, scaleX: 7, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x2d0808 }, "FrontDecals"),
    ShapesSquare32_6: d(Tx.Shapes.Square32, { x: 208, y: 560, scaleX: 3, scaleY: 0.5, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x2d0808 }, "FrontDecals"),
    TerrainGrass1_19: d(Tx.Terrain.Grass1, { x: 56, y: 544, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x480707 }, "FrontDecals"),
    TerrainGrass1_20: d(Tx.Terrain.Grass1, { x: 152, y: 544, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x480707 }, "FrontDecals"),
    TerrainGrass1_21: d(Tx.Terrain.Grass1, { x: 40, y: 576, scaleX: -1, scaleY: -1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x480707 }, "FrontDecals"),
    TerrainGrass1_22: d(Tx.Terrain.Grass1, { x: 152, y: 576, scaleX: -1, scaleY: -1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x480707 }, "FrontDecals"),
    TerrainGrass1_23: d(Tx.Terrain.Grass1, { x: 256, y: 552, scaleX: -1, scaleY: -1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x480707 }, "FrontDecals"),
    TerrainGrass3_26: d(Tx.Terrain.Grass3, { x: 224, y: 568, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x480707 }, "FrontDecals"),
    FxSparkle_18: d(Tx.Fx.Sparkle, { x: 480, y: 1160, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x709acb }, "FrontDecals"),
    FxSparkle_19: d(Tx.Fx.Sparkle, { x: 432, y: 1192, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x709acb }, "FrontDecals"),
    FxSparkle_20: d(Tx.Fx.Sparkle, { x: 392, y: 1160, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x709acb }, "FrontDecals"),
    FxSparkle_21: d(Tx.Fx.Sparkle, { x: 344, y: 1192, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x709acb }, "FrontDecals"),
    FxSparkle_22: d(Tx.Fx.Sparkle, { x: 256, y: 1160, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x709acb }, "FrontDecals"),
    FxSparkle_23: d(Tx.Fx.Sparkle, { x: 208, y: 1208, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x709acb }, "FrontDecals"),
    FxSparkle_24: d(Tx.Fx.Sparkle, { x: 160, y: 1224, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x709acb }, "FrontDecals"),
    TerrainGrass2_22: d(Tx.Terrain.Grass2, { x: 330, y: 1134, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x56a36b }, "FrontDecals"),
    TerrainGrass2_23: d(Tx.Terrain.Grass2, { x: 378, y: 1134, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x2b7451 }, "FrontDecals"),
    TerrainGrass2_24: d(Tx.Terrain.Grass2, { x: 313, y: 1138, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x2b7451 }, "FrontDecals"),
    TerrainGrass2_25: d(Tx.Terrain.Grass2, { x: 398, y: 1132, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x56a36b }, "FrontDecals"),
    TerrainGrass2_26: d(Tx.Terrain.Grass2, { x: 414, y: 1137, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x2b7451 }, "FrontDecals"),
    Npc: e(r["Npc"], {
      x: 128,
      y: 824,
      values: {
        style: 0,
        name: "",
        message:
          "I heard about what happened.@\
I'm gonna miss watching your matches on the TV!!!",
        messageAlign: "center",
      },
    }),
    Npc_1: e(r["Npc"], {
      x: 456,
      y: 936,
      values: {
        style: 100,
        name: "",
        message:
          "Oh man...@\
The rumors were true...@\
It's enormous",
        messageAlign: "left",
      },
    }),
    Npc_2: e(r["Npc"], {
      x: 344,
      y: 1144,
      values: {
        style: 300,
        name: "",
        message:
          "Sorry about your career dawg!@\
There's a blacksmith who can you help you,@\
but he's not very cheap...",
        messageAlign: "center",
      },
    }),
    Block_21: e(r["Block"], { x: 512, y: 704, width: 24, height: 40, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Block_22: e(r["Block"], { x: 512, y: 624, width: 24, height: 16, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Block_23: e(r["Block"], { x: 512, y: 544, width: 24, height: 16, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Block_24: e(r["Block"], { x: 512, y: 464, width: 24, height: 16, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Block_25: e(r["Block"], { x: 512, y: 384, width: 24, height: 16, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Block_26: e(r["Block"], { x: 512, y: 304, width: 24, height: 16, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Block_27: e(r["Block"], { x: 512, y: 224, width: 24, height: 16, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Block_28: e(r["Block"], { x: 512, y: 144, width: 24, height: 16, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Block_29: e(r["Block"], { x: 512, y: 64, width: 24, height: 16, values: { name: "", depth: 0, visible: true }, tint: 0xb82828 }),
    Npc_3: e(r["Npc"], {
      x: 0,
      y: 1280,
      values: {
        style: 5555,
        name: "",
        message:
          "Heh, freak!@\
Now you have to scrounge@\
for money like the rest of us.",
        messageAlign: "right",
      },
    }),
    Player: e(r["Player"], { x: 104, y: 502, values: { name: "", depth: 0 } }),
  })),
};
