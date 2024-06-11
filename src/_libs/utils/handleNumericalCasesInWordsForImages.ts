export function handleNumericalCasesInWordsForImages(variable: number) {
  if (variable === 0) {
    return "No images selected";
  } else if (variable === 1) {
    return `${variable} image selected`;
  } else if (variable > 1) {
    return `${variable} images selected`;
  }
}
