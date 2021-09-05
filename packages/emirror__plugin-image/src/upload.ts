import { EditorView } from '@emirror/pm/view';
import { FileOrURL, uploadImageResult } from './types';

function imgLoader(url: string) {
  return new Promise<uploadImageResult>((resolve, reject) => {
    let image = new Image();
    image.src = url;
    image.onload = function () {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const { width, height } = this;
      resolve({ width, height, url });
    };
    image.onerror = function () {
      reject(Error('image upload failed'));
    };
  });
}

export default function (fileOrURL: FileOrURL, view: EditorView) {
  return new Promise<uploadImageResult>((resolve, reject) => {
    // --- reader config
    const reader = new FileReader();
    reader.onload = async readerEvent => {
      const { width, height, url } = await imgLoader(
        readerEvent.target.result as string,
      );
      resolve({ width, height, url });
    };
    reader.onerror = () => {
      reject(Error('image upload failed'));
    };

    // ------
    setTimeout(async () => {
      if (typeof fileOrURL === 'string') {
        // 以 url 的形式上传图片
        const { width, height, url } = await imgLoader(fileOrURL);
        resolve({ width, height, url });
      } else {
        // 以 file 的形式上传图片
        // 3000 ms 后读取 file, 此后才触发 onload 的行为
        reader.readAsDataURL(fileOrURL);
      }
    }, 3000);
  });
}
