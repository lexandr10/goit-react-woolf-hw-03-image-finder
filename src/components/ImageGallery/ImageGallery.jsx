import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import stl from './imageGallery.module.css';
export class ImageGallery extends Component {
  render() {
    return (
      <div>
        <ul className={stl.ImageGallery}>
          <ImageGalleryItem
            toogleModal={this.props.toogleModal}
            images={this.props.images}
          ></ImageGalleryItem>
        </ul>
      </div>
    );
  }
}
