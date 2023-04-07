import React, { useRef } from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill, BsInstagram } from 'react-icons/bs'
import './Gallery.css';


const gallery__images = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]
const Gallery = () => {

  const scrollRef = useRef(null)
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div div className='app__gallery app__bg section__padding app__wrapper flex__center' >
      <div className="app__gallery-content">
        <SubHeading title='Instagram' />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nesciunt excepturi officiis illum consequuntur, nam sed rerum obcaecati modi laudantium!</p>
        <button type='button' className='custom__button'>View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery_images_container " ref={scrollRef}>
          {gallery__images.map((image, index) => (
            <div className='app__gallery_images_card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className="instagram-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsFillArrowLeftSquareFill className='app__gallery_arrow-icon' onClick={() => scroll('left')} />
          <BsFillArrowRightSquareFill className='app__gallery_arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div >
  )
}



  ;

export default Gallery;
