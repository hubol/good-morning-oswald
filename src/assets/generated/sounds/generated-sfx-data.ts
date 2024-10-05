// This file is generated

async function sfxs<T>(sfx: (ogg: string) => Promise<T>) {
  const sounds = await Promise.all(["collect/valuable1.ogg"].map(sfx));
  return {
    Collect: {
      Valuable1: sounds[0],
    },
  };
}

export const GeneratedSfxData = {
  sfxs,
};
