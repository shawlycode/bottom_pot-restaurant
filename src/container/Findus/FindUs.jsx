import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants'



const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info" style={{ justifyContent: 'flex-start' }}>
      <SubHeading title=" Contact" />
      <h1 className="headtext__cormorant">Find Us</h1>
      <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti harum id ea sunt. Eius iusto minima magni, quas tenetur soluta?</p>
      <p style={{ color: '#DCCA87', fontSize: "2rem", margin: '1rem 0' }}>Opening Hours</p>
      <p className="p__opensans">Mon - Fri: 10:00am - 2:00am</p>
      <p className="p__opensans">Sun - Sat: 10:00am - 3:00am</p>
      <button className="custom__button" style={{ marginTop: '1rem' }}>View More</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="" />
    </div>

  </div>
);

export default FindUs;
