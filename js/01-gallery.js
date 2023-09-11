
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

galleryList.addEventListener('click', (event) => {
   event.preventDefault(); 

   if (event.target.tagName === 'IMG') {
      const largeImageUrl = event.target.dataset.source;

      const instance = basicLightbox.create(
            `<img src="${largeImageUrl}" alt="${event.target.alt}" />`
      );

      instance.show();
   }
});
