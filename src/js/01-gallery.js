// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const arr = [];

galleryItems.map(el => {
	const galleryDiv = document.createElement('div');
	galleryDiv.className = 'gallery__item';

	const link = document.createElement('a');
	link.className = 'gallery__link';
	link.href = el.original;

	const img = document.createElement('img');
  img.className = 'gallery__image';
  img.src = el.preview;
  img.setAttribute('data-source', el.original);
  img.alt = el.description;

  galleryDiv.append(link);
	link.append(img);
	arr.push(galleryDiv);
});

gallery.append(...arr);

new SimpleLightbox('.gallery a', {});

console.log(galleryItems);
