// This file is generated

const atlases = [{ url: require("./atlas0.png"), texturesCount: 39 }];

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
      BallRed: tx({ id: "Collectibles.BallRed", atlas: 0, x: 1695, y: 199, width: 8, height: 8 }),
      Money: tx({ id: "Collectibles.Money", atlas: 0, x: 2005, y: 279, width: 32, height: 21 }),
    },
    Font: {
      Diggit: tx({ id: "Font.Diggit", atlas: 0, x: 1661, y: 185, width: 54, height: 8 }),
      ErotixLight: tx({ id: "Font.ErotixLight", atlas: 0, x: 1726, y: 73, width: 160, height: 34 }),
      Erotix: tx({ id: "Font.Erotix", atlas: 0, x: 1887, y: 73, width: 160, height: 34 }),
      Flaccid: tx({ id: "Font.Flaccid", atlas: 0, x: 1661, y: 209, width: 102, height: 24 }),
      Scribdig: tx({ id: "Font.Scribdig", atlas: 0, x: 1726, y: 0, width: 256, height: 32 }),
    },
    Fx: {
      Cloud: tx({ id: "Fx.Cloud", atlas: 0, x: 1711, y: 33, width: 239, height: 39 }),
      Heart: tx({ id: "Fx.Heart", atlas: 0, x: 1741, y: 234, width: 22, height: 19 }),
      Lump: tx({ id: "Fx.Lump", atlas: 0, x: 1983, y: 0, width: 62, height: 32 }),
      PopSmall: tx({ id: "Fx.PopSmall", atlas: 0, x: 1661, y: 194, width: 33, height: 11 }),
      Sparkle: tx({ id: "Fx.Sparkle", atlas: 0, x: 1865, y: 209, width: 18, height: 19 }),
      Swirl: tx({ id: "Fx.Swirl", atlas: 0, x: 2007, y: 236, width: 34, height: 42 }),
    },
    Home: {
      BrickHalf: tx({ id: "Home.BrickHalf", atlas: 0, x: 1951, y: 33, width: 79, height: 33 }),
      Brick: tx({ id: "Home.Brick", atlas: 0, x: 1383, y: 171, width: 148, height: 33 }),
      Cobweb: tx({ id: "Home.Cobweb", atlas: 0, x: 1741, y: 294, width: 45, height: 44 }),
      Crack: tx({ id: "Home.Crack", atlas: 0, x: 1819, y: 209, width: 45, height: 79 }),
      Door: tx({ id: "Home.Door", atlas: 0, x: 1884, y: 108, width: 150, height: 127 }),
      GoodMorning: tx({ id: "Home.GoodMorning", atlas: 0, x: 1033, y: 107, width: 349, height: 108 }),
      Mailbox: tx({ id: "Home.Mailbox", atlas: 0, x: 1764, y: 209, width: 54, height: 84 }),
      Poster: tx({ id: "Home.Poster", atlas: 0, x: 1865, y: 301, width: 48, height: 54 }),
      Shingles: tx({ id: "Home.Shingles", atlas: 0, x: 1940, y: 236, width: 66, height: 35 }),
      Tear: tx({ id: "Home.Tear", atlas: 0, x: 1716, y: 185, width: 8, height: 13 }),
      TelephoneLed: tx({ id: "Home.TelephoneLed", atlas: 0, x: 1719, y: 171, width: 5, height: 3 }),
      Telephone: tx({ id: "Home.Telephone", atlas: 0, x: 1865, y: 236, width: 74, height: 64 }),
      WindowLight: tx({ id: "Home.WindowLight", atlas: 0, x: 1726, y: 108, width: 157, height: 100 }),
      Window: tx({ id: "Home.Window", atlas: 0, x: 1661, y: 234, width: 79, height: 60 }),
    },
    Npc: {
      Layers: tx({ id: "Npc.Layers", atlas: 0, x: 0, y: 0, width: 1710, height: 106 }),
      Message: tx({ id: "Npc.Message", atlas: 0, x: 1383, y: 107, width: 342, height: 63 }),
    },
    Player: {
      Layers: tx({ id: "Player.Layers", atlas: 0, x: 0, y: 107, width: 1032, height: 110 }),
      Penis: tx({ id: "Player.Penis", atlas: 0, x: 2042, y: 108, width: 6, height: 9 }),
    },
    Shapes: {
      Circle64: tx({ id: "Shapes.Circle64", atlas: 0, x: 1940, y: 272, width: 64, height: 64 }),
      LineVertical16: tx({ id: "Shapes.LineVertical16", atlas: 0, x: 2046, y: 0, width: 1, height: 16 }),
      Square32: tx({ id: "Shapes.Square32", atlas: 0, x: 2005, y: 301, width: 32, height: 32 }),
      Triangle128: tx({ id: "Shapes.Triangle128", atlas: 0, x: 1532, y: 171, width: 128, height: 128 }),
    },
    Terrain: {
      FishSkeleton: tx({ id: "Terrain.FishSkeleton", atlas: 0, x: 1819, y: 289, width: 45, height: 56 }),
      Grass1: tx({ id: "Terrain.Grass1", atlas: 0, x: 1383, y: 205, width: 125, height: 18 }),
      Grass2: tx({ id: "Terrain.Grass2", atlas: 0, x: 1509, y: 205, width: 22, height: 32 }),
      Grass3: tx({ id: "Terrain.Grass3", atlas: 0, x: 1661, y: 171, width: 57, height: 13 }),
    },
  };
}

export const GeneratedTextureData = {
  atlases,
  txs,
};
