export function handleDynamicToastMsg(imageLength: number) {
  if (imageLength === 1) {
    return "1 Image Deleted Successfully";
  } else {
    return `${imageLength} Images Deleted Successfully`;
  }
}
