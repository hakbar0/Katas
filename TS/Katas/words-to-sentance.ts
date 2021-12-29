//readonly as never mutate the array
export const wordsToSentence = (words: readonly string[]) => words.join(" ");
