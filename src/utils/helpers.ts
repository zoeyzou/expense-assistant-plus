export const reduceArrayOfObjectsToIndexedString = (
  arr: { [key: string]: string }[]
): string =>
  arr.reduce(
    (acc: string, curr: any, index: number) =>
      acc + index + ': ' + curr[Object.keys(curr)[0]] + '\n',
    ''
  );
