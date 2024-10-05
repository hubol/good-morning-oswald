// This file is generated

const atlases = [{ url: require("./atlas0.png"), texturesCount: 31 }];

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
      BallRed: tx({ id: "Collectibles.BallRed", atlas: 0, x: 1907, y: 123, width: 8, height: 8 }),
    },
    Font: {
      Diggit: tx({ id: "Font.Diggit", atlas: 0, x: 1861, y: 90, width: 54, height: 8 }),
      ErotixLight: tx({ id: "Font.ErotixLight", atlas: 0, x: 1623, y: 0, width: 160, height: 34 }),
      Erotix: tx({ id: "Font.Erotix", atlas: 0, x: 1784, y: 0, width: 160, height: 34 }),
      Flaccid: tx({ id: "Font.Flaccid", atlas: 0, x: 1945, y: 0, width: 102, height: 24 }),
    },
    Fx: {
      Cloud: tx({ id: "Fx.Cloud", atlas: 0, x: 1383, y: 0, width: 239, height: 39 }),
      Heart: tx({ id: "Fx.Heart", atlas: 0, x: 1965, y: 92, width: 22, height: 19 }),
      Lump: tx({ id: "Fx.Lump", atlas: 0, x: 1928, y: 59, width: 62, height: 32 }),
      PopSmall: tx({ id: "Fx.PopSmall", atlas: 0, x: 1587, y: 40, width: 33, height: 11 }),
      Sparkle: tx({ id: "Fx.Sparkle", atlas: 0, x: 1512, y: 74, width: 18, height: 19 }),
    },
    Home: {
      BrickHalf: tx({ id: "Home.BrickHalf", atlas: 0, x: 1945, y: 25, width: 79, height: 33 }),
      Brick: tx({ id: "Home.Brick", atlas: 0, x: 1383, y: 40, width: 148, height: 33 }),
      Cobweb: tx({ id: "Home.Cobweb", atlas: 0, x: 1861, y: 99, width: 45, height: 44 }),
      Crack: tx({ id: "Home.Crack", atlas: 0, x: 1512, y: 125, width: 45, height: 79 }),
      GoodMorning: tx({ id: "Home.GoodMorning", atlas: 0, x: 1033, y: 0, width: 349, height: 108 }),
      Mailbox: tx({ id: "Home.Mailbox", atlas: 0, x: 1532, y: 40, width: 54, height: 84 }),
      Poster: tx({ id: "Home.Poster", atlas: 0, x: 1916, y: 92, width: 48, height: 54 }),
      Shingles: tx({ id: "Home.Shingles", atlas: 0, x: 1861, y: 54, width: 66, height: 35 }),
      Tear: tx({ id: "Home.Tear", atlas: 0, x: 1907, y: 99, width: 8, height: 13 }),
      WindowLight: tx({ id: "Home.WindowLight", atlas: 0, x: 1623, y: 35, width: 157, height: 100 }),
      Window: tx({ id: "Home.Window", atlas: 0, x: 1781, y: 54, width: 79, height: 60 }),
    },
    Player: {
      Layers: tx({ id: "Player.Layers", atlas: 0, x: 0, y: 0, width: 1032, height: 110 }),
      Penis: tx({ id: "Player.Penis", atlas: 0, x: 1907, y: 113, width: 6, height: 9 }),
    },
    Shapes: {
      Circle64: tx({ id: "Shapes.Circle64", atlas: 0, x: 1558, y: 125, width: 64, height: 64 }),
      LineVertical16: tx({ id: "Shapes.LineVertical16", atlas: 0, x: 1621, y: 40, width: 1, height: 16 }),
      Square32: tx({ id: "Shapes.Square32", atlas: 0, x: 1587, y: 52, width: 32, height: 32 }),
      Triangle128: tx({ id: "Shapes.Triangle128", atlas: 0, x: 1383, y: 74, width: 128, height: 128 }),
    },
    Terrain: {
      FishSkeleton: tx({ id: "Terrain.FishSkeleton", atlas: 0, x: 1991, y: 73, width: 45, height: 56 }),
      Grass1: tx({ id: "Terrain.Grass1", atlas: 0, x: 1781, y: 35, width: 125, height: 18 }),
      Grass2: tx({ id: "Terrain.Grass2", atlas: 0, x: 2025, y: 25, width: 22, height: 32 }),
      Grass3: tx({ id: "Terrain.Grass3", atlas: 0, x: 1991, y: 59, width: 57, height: 13 }),
    },
  };
}

export const GeneratedTextureData = {
  atlases,
  txs,
};
