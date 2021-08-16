/**
 * Used to simulate async image uploading from local.
 */
export function uploadFile(file: File) {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    setTimeout(() => {
      reader.readAsDataURL(file);
    }, 1500);
  });
}
