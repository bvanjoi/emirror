/**
 * Used to simulate async image uploading from local.
 */
export function uploadImage(imgFile: File) {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    setTimeout(() => {
      reader.readAsDataURL(imgFile);
    }, 1500);
  });
}
