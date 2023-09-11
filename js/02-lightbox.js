
import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

function createGalleryItem(item) {
   const listItem = document.createElement('li');
   listItem.classList.add('gallery__item');

   const link = document.createElement('a');
   link.classList.add('gallery__link');
   link.href = item.original;

   const image = document.createElement('img');
   image.classList.add('gallery__image');
   image.src = item.preview;
   image.setAttribute('data-source', item.original);
   image.alt = item.description;

   link.appendChild(image);
   listItem.appendChild(link);

   return listItem;
}

galleryItems.forEach(item => {
   const galleryItem = createGalleryItem(item);
   galleryList.appendChild(galleryItem);
});


const lightbox = new SimpleLightbox('.gallery a', {
   captionsData: 'alt',
   captionDelay: 250, 
});


