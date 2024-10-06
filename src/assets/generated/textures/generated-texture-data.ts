// This file is generated

const atlases = [{ url: require("./atlas0.png"), texturesCount: 40 }];

interface TxData {
  id: string;
  atlas: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

function txs<T>(tx: (data: TxData) => T) {
  return {
    Collectibles: {
      BallRed: tx({ id: "Collectibles.BallRed", atlas: 0, x: 3958, y: 143, width: 8, height: 8 }),
      Money: tx({ id: "Collectibles.Money", atlas: 0, x: 4064, y: 0, width: 32, height: 21 }),
    },
    Ending: {
      Oswald: tx({ id: "Ending.Oswald", atlas: 0, x: 0, y: 0, width: 3456, height: 458 }),
    },
    Font: {
      Diggit: tx({ id: "Font.Diggit", atlas: 0, x: 3608, y: 292, width: 54, height: 8 }),
      ErotixLight: tx({ id: "Font.ErotixLight", atlas: 0, x: 3807, y: 73, width: 160, height: 34 }),
      Erotix: tx({ id: "Font.Erotix", atlas: 0, x: 3807, y: 108, width: 160, height: 34 }),
      Flaccid: tx({ id: "Font.Flaccid", atlas: 0, x: 3958, y: 221, width: 102, height: 24 }),
      Scribdig: tx({ id: "Font.Scribdig", atlas: 0, x: 3807, y: 0, width: 256, height: 32 }),
    },
    Fx: {
      Cloud: tx({ id: "Fx.Cloud", atlas: 0, x: 3807, y: 33, width: 239, height: 39 }),
      Heart: tx({ id: "Fx.Heart", atlas: 0, x: 3757, y: 185, width: 22, height: 19 }),
      Lump: tx({ id: "Fx.Lump", atlas: 0, x: 3864, y: 280, width: 62, height: 32 }),
      PopSmall: tx({ id: "Fx.PopSmall", atlas: 0, x: 3757, y: 173, width: 33, height: 11 }),
      Sparkle: tx({ id: "Fx.Sparkle", atlas: 0, x: 4042, y: 260, width: 18, height: 19 }),
      Swirl: tx({ id: "Fx.Swirl", atlas: 0, x: 4061, y: 221, width: 34, height: 42 }),
    },
    Home: {
      BrickHalf: tx({ id: "Home.BrickHalf", atlas: 0, x: 3663, y: 207, width: 79, height: 33 }),
      Brick: tx({ id: "Home.Brick", atlas: 0, x: 3608, y: 173, width: 148, height: 33 }),
      Cobweb: tx({ id: "Home.Cobweb", atlas: 0, x: 3996, y: 260, width: 45, height: 44 }),
      Crack: tx({ id: "Home.Crack", atlas: 0, x: 3743, y: 207, width: 45, height: 79 }),
      Door: tx({ id: "Home.Door", atlas: 0, x: 3457, y: 173, width: 150, height: 127 }),
      GoodMorning: tx({ id: "Home.GoodMorning", atlas: 0, x: 3457, y: 0, width: 349, height: 108 }),
      Mailbox: tx({ id: "Home.Mailbox", atlas: 0, x: 3608, y: 207, width: 54, height: 84 }),
      Poster: tx({ id: "Home.Poster", atlas: 0, x: 3789, y: 309, width: 48, height: 54 }),
      Shingles: tx({ id: "Home.Shingles", atlas: 0, x: 3864, y: 244, width: 66, height: 35 }),
      Tear: tx({ id: "Home.Tear", atlas: 0, x: 3791, y: 173, width: 8, height: 13 }),
      TelephoneLed: tx({ id: "Home.TelephoneLed", atlas: 0, x: 4054, y: 246, width: 5, height: 3 }),
      Telephone: tx({ id: "Home.Telephone", atlas: 0, x: 3789, y: 244, width: 74, height: 64 }),
      WindowLight: tx({ id: "Home.WindowLight", atlas: 0, x: 3800, y: 143, width: 157, height: 100 }),
      Window: tx({ id: "Home.Window", atlas: 0, x: 3663, y: 241, width: 79, height: 60 }),
    },
    Npc: {
      Layers: tx({ id: "Npc.Layers", atlas: 0, x: 0, y: 459, width: 1800, height: 106 }),
      Message: tx({ id: "Npc.Message", atlas: 0, x: 3457, y: 109, width: 342, height: 63 }),
    },
    Player: {
      Layers: tx({ id: "Player.Layers", atlas: 0, x: 1801, y: 459, width: 1032, height: 110 }),
      Penis: tx({ id: "Player.Penis", atlas: 0, x: 3800, y: 109, width: 6, height: 9 }),
    },
    Shapes: {
      Circle64: tx({ id: "Shapes.Circle64", atlas: 0, x: 3931, y: 246, width: 64, height: 64 }),
      LineVertical16: tx({ id: "Shapes.LineVertical16", atlas: 0, x: 4047, y: 55, width: 1, height: 16 }),
      Square32: tx({ id: "Shapes.Square32", atlas: 0, x: 4064, y: 22, width: 32, height: 32 }),
      Triangle128: tx({ id: "Shapes.Triangle128", atlas: 0, x: 3968, y: 73, width: 128, height: 128 }),
    },
    Terrain: {
      FishSkeleton: tx({ id: "Terrain.FishSkeleton", atlas: 0, x: 3743, y: 287, width: 45, height: 56 }),
      Grass1: tx({ id: "Terrain.Grass1", atlas: 0, x: 3958, y: 202, width: 125, height: 18 }),
      Grass2: tx({ id: "Terrain.Grass2", atlas: 0, x: 3838, y: 309, width: 22, height: 32 }),
      Grass3: tx({ id: "Terrain.Grass3", atlas: 0, x: 3996, y: 246, width: 57, height: 13 }),
    },
  };
}

export const GeneratedTextureData = {
  atlases,
  txs,
};
