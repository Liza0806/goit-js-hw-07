import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryJs = document.querySelector('.gallery');
galleryJs.addEventListener('click', makeBigPicture);


let lii = ' ';

galleryItems.map(item => {

let itemText = `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}"  onclick="return false">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source ="${item.original}"
      alt="${item.description}"
     
    />
  </a>
</li>`
lii += itemText;


})
console.log(lii)
galleryJs.insertAdjacentHTML('afterbegin',lii);

function makeBigPicture (e) {
if(e.target.nodeName !== 'IMG'){
    return;
}
const instance = basicLightbox.create(`
    <img src = '${e.target.dataset.source}' width = '600' height = '600'>
`);

instance.show()

galleryJs.addEventListener('keydown', funE);

function funE (e){
    if (e.code === "Escape"){
        instance.close();
    }
}

}



