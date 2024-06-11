export function handleDynamicToastMsg(imageLength: number) {
  if (imageLength === 1) {
    return "1 image deleted successfully";
  } else if (imageLength === 11) {
    return "All images deleted successfully";
  } else {
    return `${imageLength} images deleted successfully`;
  }
}
