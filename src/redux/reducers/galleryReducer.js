import Img1 from '../../assets/Gallery/gallery-1.jpg';
import Img2 from '../../assets/Gallery/gallery-2.jpg';
import Img3 from '../../assets/Gallery/gallery-4.jpg';
import Img4 from '../../assets/Gallery/gallery-3.jpg';
import ImgSmall1 from '../../assets/GalleryPage/gallery-regular-1.jpg';
import ImgSmall2 from '../../assets/GalleryPage/gallery-regular-2.jpg';
import ImgSmall3 from '../../assets/GalleryPage/gallery-regular-3.jpg';
import ImgSmall4 from '../../assets/GalleryPage/gallery-regular-4.jpg';
import ImgSmall5 from '../../assets/GalleryPage/gallery-regular-5.jpg';
import ImgSmall6 from '../../assets/GalleryPage/gallery-regular-6.jpg';
import ImgSmall7 from '../../assets/GalleryPage/gallery-regular-7.jpg';
import ImgSmall8 from '../../assets/GalleryPage/gallery-regular-8.jpg';
import ImgSmall9 from '../../assets/GalleryPage/gallery-regular-9.jpg';
import ImgSmall10 from '../../assets/GalleryPage/gallery-regular-10.jpg';
import ImgSmall11 from '../../assets/GalleryPage/gallery-regular-11.jpg';
import ImgSmall12 from '../../assets/GalleryPage/gallery-regular-12.jpg';
import ImgBig1 from '../../assets/GalleryPage/image-1.jpg';

let initialState = {
  galleryImgPreview: [
    { id: 1, position: 'img-left', src: Img1 },
    { id: 2, position: 'img-center', src: Img2 },
    { id: 3, position: 'img-right', src: Img3 },
    { id: 4, position: 'img-bottom', src: Img4 },
  ],
  galleryTags: [
    { id: 1, tag: 'ALL' },
    { id: 2, tag: 'ORIGIN' },
    { id: 3, tag: 'PLAYSTATION 4' },
    { id: 4, tag: 'STEAM' },
    { id: 5, tag: 'UPLAY' },
    { id: 6, tag: 'XBOX ONE' },
  ],
  galleryImages: [
    { id: 1, imgSmall: ImgSmall1, imgBig: ImgBig1, tag: 'PS VITA', title: 'COW BILTONG PORK BELLY KIEL' },
    { id: 2, imgSmall: ImgSmall2, imgBig: ImgBig1, tag: 'XBOX ONE', title: 'Salami kevin landjaeger rump ' },
    { id: 3, imgSmall: ImgSmall3, imgBig: ImgBig1, tag: 'Origon', title: 'meatball pork chop Pork belly' },
    { id: 4, imgSmall: ImgSmall4, imgBig: ImgBig1, tag: 'PLAYSTATION 4', title: 'Capicola prosciutto meatloaf jerky' },
    { id: 5, imgSmall: ImgSmall5, imgBig: ImgBig1, tag: 'STEAM', title: 'Ham jerky cupim pastrami cow' },
    { id: 6, imgSmall: ImgSmall6, imgBig: ImgBig1, tag: 'PS VITA', title: 'COW BILTONG PORK BELLY KIEL' },
    { id: 7, imgSmall: ImgSmall7, imgBig: ImgBig1, tag: 'PS VITA', title: 'COW BILTONG PORK BELLY KIEL' },
    { id: 8, imgSmall: ImgSmall8, imgBig: ImgBig1, tag: 'PS VITA', title: 'COW BILTONG PORK BELLY KIEL' },
    { id: 9, imgSmall: ImgSmall9, imgBig: ImgBig1, tag: 'PS VITA', title: 'COW BILTONG PORK BELLY KIEL' },
    { id: 10, imgSmall: ImgSmall10, imgBig: ImgBig1, tag: 'PS VITA', title: 'COW BILTONG PORK BELLY KIEL' },
    { id: 11, imgSmall: ImgSmall11, imgBig: ImgBig1, tag: 'PS VITA', title: 'COW BILTONG PORK BELLY KIEL' },
    { id: 12, imgSmall: ImgSmall12, imgBig: ImgBig1, tag: 'PS VITA', title: 'COW BILTONG PORK BELLY KIEL' },
  ],
  pageSize: 6,
<<<<<<< Updated upstream
  totalImagesCount: 12,
  currentPage: 1,
=======
  totalImagesCount: 24,
  currentPage: 2,
>>>>>>> Stashed changes
};

const galleryReducer = (state = initialState, action) => {
  return state;
};

export default galleryReducer;
