export function findAllIndexes(string: string, word: string) {
  let result = [];
  let dif = 0;
  while (true) {
    let index = string.indexOf(word);
    if (index === -1) break;
    else {
      result.push(index + dif);
      let cur = string.length;
      string = string.substring(index + word.length);
      dif += cur - string.length;
    }
  }
  return result;
}
