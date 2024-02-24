import stl from './ImageGallertItem.module.css';
export const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {
  return (
    <li className={stl.ImageGalleryItem} key={id}>
      <img
        className={stl.ImageGalleryItemImage}
        onClick={() => this.props.toogleModal(largeImageURL)}
        src={webformatURL}
        alt={id}
      />
    </li>
  );
};
