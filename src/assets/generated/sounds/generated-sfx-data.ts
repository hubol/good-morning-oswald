// This file is generated

async function sfxs<T>(sfx: (ogg: string) => Promise<T>) {
  const sounds = await Promise.all(
    [
      "collect/valuable1.ogg",
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
    Fx: {
      Heart1: sounds[1],
      Heart2: sounds[2],
      Heart3: sounds[3],
      Heart4: sounds[4],
      Heart5: sounds[5],
      Heart6: sounds[6],
    },
    Player: {
      Duck: sounds[7],
      Unduck: sounds[8],
    },
  };
}

export const GeneratedSfxData = {
  sfxs,
};
