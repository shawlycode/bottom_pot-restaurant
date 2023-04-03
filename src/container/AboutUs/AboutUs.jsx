import React from 'react';
import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center" >
      <img src={images.G} alt="G" alt='g letter' />
    </div>
    <div className="app__aboutus-content flex__center ">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>About us</h1>
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus provident mollitia voluptatum repudiandae quas quos possimus pariatur voluptate, beatae fugit aperiam ratione.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Our History</h1>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, id nihil odio libero necessitatibus cupiditate eum at laboriosam officia numquam ratione architecto.Placeat, id nihil odio</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
