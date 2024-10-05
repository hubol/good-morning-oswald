// This file is generated

const atlases = [{ url: require("./atlas0.png"), texturesCount: 22 }];

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
      BallRed: tx({ id: "Collectibles.BallRed", atlas: 0, x: 580, y: 151, width: 8, height: 8 }),
    },
    Font: {
      Diggit: tx({ id: "Font.Diggit", atlas: 0, x: 476, y: 165, width: 54, height: 8 }),
      ErotixLight: tx({ id: "Font.ErotixLight", atlas: 0, x: 590, y: 111, width: 160, height: 34 }),
      Erotix: tx({ id: "Font.Erotix", atlas: 0, x: 751, y: 111, width: 160, height: 34 }),
      Flaccid: tx({ id: "Font.Flaccid", atlas: 0, x: 912, y: 111, width: 102, height: 24 }),
    },
    Fx: {
      Cloud: tx({ id: "Fx.Cloud", atlas: 0, x: 350, y: 111, width: 239, height: 39 }),
      Heart: tx({ id: "Fx.Heart", atlas: 0, x: 399, y: 170, width: 22, height: 19 }),
      Lump: tx({ id: "Fx.Lump", atlas: 0, x: 947, y: 65, width: 62, height: 32 }),
      Sparkle: tx({ id: "Fx.Sparkle", atlas: 0, x: 422, y: 170, width: 18, height: 19 }),
    },
    Home: {
      GoodMorning: tx({ id: "Home.GoodMorning", atlas: 0, x: 0, y: 111, width: 349, height: 108 }),
      Poster: tx({ id: "Home.Poster", atlas: 0, x: 350, y: 170, width: 48, height: 54 }),
      WindowLight: tx({ id: "Home.WindowLight", atlas: 0, x: 590, y: 146, width: 157, height: 100 }),
      Window: tx({ id: "Home.Window", atlas: 0, x: 912, y: 136, width: 79, height: 60 }),
    },
    Player: {
      Layers: tx({ id: "Player.Layers", atlas: 0, x: 0, y: 0, width: 946, height: 110 }),
      Penis: tx({ id: "Player.Penis", atlas: 0, x: 947, y: 98, width: 6, height: 9 }),
    },
    Shapes: {
      Circle64: tx({ id: "Shapes.Circle64", atlas: 0, x: 947, y: 0, width: 64, height: 64 }),
      LineVertical16: tx({ id: "Shapes.LineVertical16", atlas: 0, x: 531, y: 165, width: 1, height: 16 }),
      Square32: tx({ id: "Shapes.Square32", atlas: 0, x: 992, y: 136, width: 32, height: 32 }),
    },
    Terrain: {
      FishSkeleton: tx({ id: "Terrain.FishSkeleton", atlas: 0, x: 534, y: 151, width: 45, height: 56 }),
      Grass1: tx({ id: "Terrain.Grass1", atlas: 0, x: 350, y: 151, width: 125, height: 18 }),
      Grass2: tx({ id: "Terrain.Grass2", atlas: 0, x: 992, y: 169, width: 22, height: 32 }),
      Grass3: tx({ id: "Terrain.Grass3", atlas: 0, x: 476, y: 151, width: 57, height: 13 }),
    },
  };
}

export const GeneratedTextureData = {
  atlases,
  txs,
};
