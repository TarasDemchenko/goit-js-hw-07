import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesList = document.querySelector('.gallery');
const makeImagesList = makeImage(galleryItems);
function makeImage(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class ="gallery__item"><a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a></li>`;
    })
    .join('');
}

imagesList.insertAdjacentHTML('beforeend', makeImagesList);
imagesList.addEventListener('click', onImageClick);
const instance = basicLightbox.create(
  `
    <img src="" width="1280">
`,
  {
    onShow: instance => {
      window.addEventListener('keydown', onEscPress);
    },
    onClose: instance => {
      window.removeEventListener('keydown', onEscPress);
    },
  }
);

function onImageClick(event) {
  event.preventDefault();
  const datasetSource = event.target.dataset.source;
  if (!datasetSource) return;
  instance.element().querySelector('img').src = datasetSource;
  instance.show();
}

function onEscPress(event) {
  if (event.code !== 'Escape') return;
  instance.close();
}
