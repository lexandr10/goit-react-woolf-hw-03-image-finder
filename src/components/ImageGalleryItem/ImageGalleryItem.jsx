import stl from './ImageGallertItem.module.css';
export const ImageGalleryItem = props => {
  return (
    props.images &&
    props.images.map(({ id, webformatURL, largeImageURL }) => (
      <li className={stl.ImageGalleryItem} key={id}>
        <img
          className={stl.ImageGalleryItemImage}
          onClick={() => props.toogleModal(largeImageURL)}
          src={webformatURL}
          alt={id}
        />
      </li>
    ))
  );
};
