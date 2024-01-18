/* eslint-disable @typescript-eslint/no-explicit-any */
const useFiles = async (evt: any, cb) => {
  evt.stopPropagation();
  evt.preventDefault();

  const multimedia = evt.target.files;

  console.log(evt.target.files[0]);

  const array_images: any[] = [];

  for (let index = 0; index < multimedia.length; index++) {
    const element = multimedia[index];

    const reader = new FileReader();
    reader.readAsDataURL(element);

    reader.onloadend = ({ target }) => {
      array_images.push({
        element,
        base64: target?.result
      });

      cb(array_images);
    };
  }

  // reader.onloadend = ({ target }) => setFiles(target);
};

export { useFiles };
