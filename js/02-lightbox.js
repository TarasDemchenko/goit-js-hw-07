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

      alt="${description}"
    />
  </a></li>`;
    })
    .join('');
}

imagesList.insertAdjacentHTML('beforeend', makeImagesList);

//ініцілізуемо plugin light box  та додаемо параметри
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  captionType: 'attr',
  captionSelector: 'img',
});
