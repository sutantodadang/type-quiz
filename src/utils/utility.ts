export const shuffleArray = (arr: undefined[] | string[]) =>
  [...arr].sort(() => Math.random() - 0.5);
