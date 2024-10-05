// This file is generated

const atlases = [{ url: require("./atlas0.png"), texturesCount: 7 }];

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
      BallRed: tx({ id: "Collectibles.BallRed", atlas: 0, x: 980, y: 0, width: 8, height: 8 }),
    },
    Font: {
      Diggit: tx({ id: "Font.Diggit", atlas: 0, x: 925, y: 0, width: 54, height: 8 }),
      ErotixLight: tx({ id: "Font.ErotixLight", atlas: 0, x: 603, y: 0, width: 160, height: 34 }),
      Erotix: tx({ id: "Font.Erotix", atlas: 0, x: 764, y: 0, width: 160, height: 34 }),
      Flaccid: tx({ id: "Font.Flaccid", atlas: 0, x: 729, y: 35, width: 102, height: 24 }),
    },
    Player: {
      Layers: tx({ id: "Player.Layers", atlas: 0, x: 0, y: 0, width: 602, height: 110 }),
    },
    Terrain: {
      Grass1: tx({ id: "Terrain.Grass1", atlas: 0, x: 603, y: 35, width: 125, height: 18 }),
    },
  };
}

export const GeneratedTextureData = {
  atlases,
  txs,
};
