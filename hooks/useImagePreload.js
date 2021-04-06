import { useEffect } from 'react';

const imageTemplate = {
  src: 'http://placekitten.com/100/100',
  width: 100,
};

export const useImagePreload = (
  imageUrls = [],
  { logOutput = false, useNextImage = true }
) => {
  const nextImageRoot = '/_next/image';

  // This url format is taken almost directly from the next source code, so it may change in the future. If so, please find the new format on https://github.com/vercel/next.js/blob/canary/packages/next/client/image.tsx and update it here
  const nextjsImageUrl = (src, width = 2048, quality = 75) =>
    `${nextImageRoot}?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;

  useEffect(() => {
    const images = imageUrls.map((image) => {
      if (!image) return undefined;
      if (typeof image === 'string') {
        const newImg = new Image();
        newImg.src = useNextImage ? nextjsImageUrl(image) : image;
        return newImg;
      } else if (
        (typeof image === 'object' && !!image.width) ||
        !!image.height
      ) {
        const newImg = new Image(image.width);
        newImg.src = useNextImage
          ? nextjsImageUrl(image.src, image.width)
          : image.src;
        return newImg;
      }
      return undefined;
    });

    if (logOutput) {
      console.log({ loadedImages: images, imageUrls });
    }
  }, [imageUrls]);
};
