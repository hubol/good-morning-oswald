// This file is generated

const atlases = [{ url: require("./atlas0.png"), texturesCount: 11 }];

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
      BallRed: tx({ id: "Collectibles.BallRed", atlas: 0, x: 993, y: 0, width: 8, height: 8 }),
    },
    Font: {
      Diggit: tx({ id: "Font.Diggit", atlas: 0, x: 947, y: 57, width: 54, height: 8 }),
      ErotixLight: tx({ id: "Font.ErotixLight", atlas: 0, x: 240, y: 111, width: 160, height: 34 }),
      Erotix: tx({ id: "Font.Erotix", atlas: 0, x: 401, y: 111, width: 160, height: 34 }),
      Flaccid: tx({ id: "Font.Flaccid", atlas: 0, x: 688, y: 111, width: 102, height: 24 }),
    },
    Fx: {
      Cloud: tx({ id: "Fx.Cloud", atlas: 0, x: 0, y: 111, width: 239, height: 39 }),
      Heart: tx({ id: "Fx.Heart", atlas: 0, x: 1002, y: 33, width: 22, height: 19 }),
    },
    Player: {
      Layers: tx({ id: "Player.Layers", atlas: 0, x: 0, y: 0, width: 946, height: 110 }),
    },
    Terrain: {
      FishSkeleton: tx({ id: "Terrain.FishSkeleton", atlas: 0, x: 947, y: 0, width: 45, height: 56 }),
      Grass1: tx({ id: "Terrain.Grass1", atlas: 0, x: 562, y: 111, width: 125, height: 18 }),
      Grass2: tx({ id: "Terrain.Grass2", atlas: 0, x: 1002, y: 0, width: 22, height: 32 }),
    },
  };
}

export const GeneratedTextureData = {
  atlases,
  txs,
};
