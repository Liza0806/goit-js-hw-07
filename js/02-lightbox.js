import { galleryItems } from './gallery-items.js';
const galleryJs = document.querySelector('.gallery');



let lii = ' ';

galleryItems.map(item => {

let itemText = `<li class="gallery__item">
<a class="gallery__link" href="${item.original}">
   <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
</li>`
lii += itemText;




})

galleryJs.insertAdjacentHTML('afterbegin',lii)


let gallery = new SimpleLightbox('.gallery a', {
    captionsData:'alt',
    captionsDelay: 250
});
gallery.on('show.simplelightbox', function (e) {
	
        if(e.target.nodeName !== 'IMG'){
            return;
        }
        const instance = basicLightbox.create(`
            <img src = '${e.target.src}' width = '600' height = '600'>
        `);
        
        
});


galleryJs.addEventListener('click', gallery.on('show.simplelightbox', function (e) {
	
    if(e.target.nodeName !== 'IMG'){
        return;
    }
    const instance = basicLightbox.create(`
        <img src = '${e.target.src}' width = '600' height = '600'>
    `);
    

    
}));
