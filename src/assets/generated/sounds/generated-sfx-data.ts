// This file is generated

async function sfxs<T>(sfx: (ogg: string) => Promise<T>) {
  const sounds = await Promise.all(
    [
      "collect/valuable1.ogg",
      "dialog/close.ogg",
      "dialog/open.ogg",
      "fx/heart1.ogg",
      "fx/heart2.ogg",
      "fx/heart3.ogg",
      "fx/heart4.ogg",
      "fx/heart5.ogg",
      "fx/heart6.ogg",
      "player/duck.ogg",
      "player/unduck.ogg",
    ].map(sfx),
  );
  return {
    Collect: {
      Valuable1: sounds[0],
    },
    Dialog: {
      Close: sounds[1],
      Open: sounds[2],
    },
    Fx: {
      Heart1: sounds[3],
      Heart2: sounds[4],
      Heart3: sounds[5],
      Heart4: sounds[6],
      Heart5: sounds[7],
      Heart6: sounds[8],
    },
    Player: {
      Duck: sounds[9],
      Unduck: sounds[10],
    },
  };
}

export const GeneratedSfxData = {
  sfxs,
};
