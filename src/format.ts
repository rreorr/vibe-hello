export function toTitleCase(str: string): string {
  return str.replace(/\p{L}\S*/gu, (word) =>
    word[0]!.toUpperCase() + word.slice(1).toLowerCase()
  );
}
