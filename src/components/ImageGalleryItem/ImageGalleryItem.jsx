import { Component } from 'react';
import stl from './ImageGallertItem.module.css';
export class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL, largeImageURL } = this.props;
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
  }
}
