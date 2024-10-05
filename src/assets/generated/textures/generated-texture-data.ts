// This file is generated

const atlases = [{ url: require("./atlas0.png"), texturesCount: 6 }];

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
      BallRed: tx({ id: "Collectibles.BallRed", atlas: 0, x: 997, y: 0, width: 8, height: 8 }),
    },
    Font: {
      Diggit: tx({ id: "Font.Diggit", atlas: 0, x: 942, y: 0, width: 54, height: 8 }),
      ErotixLight: tx({ id: "Font.ErotixLight", atlas: 0, x: 517, y: 0, width: 160, height: 34 }),
      Erotix: tx({ id: "Font.Erotix", atlas: 0, x: 678, y: 0, width: 160, height: 34 }),
      Flaccid: tx({ id: "Font.Flaccid", atlas: 0, x: 839, y: 0, width: 102, height: 24 }),
    },
    Player: {
      Layers: tx({ id: "Player.Layers", atlas: 0, x: 0, y: 0, width: 516, height: 86 }),
    },
  };
}

export const GeneratedTextureData = {
  atlases,
  txs,
};
