import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => (
  <div className='app__bg app__newsLetter' >
    <SubHeading title="News Letter" />
    <h1 className="headtext__cormorant">Subscribe to  our newsletter</h1>
    <p className="p__opensans">And never miss our menu updates </p>
    <div className="app__neswletter_input">
      <input type="text" placeholder='enter your email' />
      <button type='button' className='custom__button'>Subscribe</button>
    </div>
  </div >
);

export default Newsletter;
