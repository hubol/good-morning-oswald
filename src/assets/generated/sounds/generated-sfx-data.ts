// This file is generated

async function sfxs<T>(sfx: (ogg: string) => Promise<T>) {
  const sounds = await Promise.all(
    [
      "collect/money.ogg",
      "collect/valuable1.ogg",
      "dialog/close.ogg",
      "dialog/open.ogg",
      "fx/heart1.ogg",
      "fx/heart2.ogg",
      "fx/heart3.ogg",
      "fx/heart4.ogg",
      "fx/heart5.ogg",
      "fx/heart6.ogg",
      "fx/money count.ogg",
      "player/duck.ogg",
      "player/unduck.ogg",
    ].map(sfx),
  );
  return {
    Collect: {
      Money: sounds[0],
      Valuable1: sounds[1],
    },
    Dialog: {
      Close: sounds[2],
      Open: sounds[3],
    },
    Fx: {
      Heart1: sounds[4],
      Heart2: sounds[5],
      Heart3: sounds[6],
      Heart4: sounds[7],
      Heart5: sounds[8],
      Heart6: sounds[9],
      MoneyCount: sounds[10],
    },
    Player: {
      Duck: sounds[11],
      Unduck: sounds[12],
    },
  };
}

export const GeneratedSfxData = {
  sfxs,
};
