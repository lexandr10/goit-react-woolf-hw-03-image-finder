import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import stl from './imageGallery.module.css';
export class ImageGallery extends Component {
  render() {
    return (
      <div>
        <ul className={stl.ImageGallery}>
          {this.props.images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              toogleModal={this.props.toogleModal}
              id={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            ></ImageGalleryItem>
          ))}
        </ul>
      </div>
    );
  }
}
