export const chunkArray = (arr: any[], quantityArr: number) => {
  const chunkLength = Math.max(arr.length / quantityArr, 1);
  const chunks = [];
  for (let i = 0; i < quantityArr; i++) {
    if (chunkLength * (i + 1) <= arr.length) {
      chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
    }
  }
  return chunks;
};
