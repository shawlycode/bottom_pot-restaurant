import React from 'react';
import { images } from '../../constants'
import SubHeading from '../SubHeading/SubHeading';
import { RiFacebookFill, RiInstagramLine, RiTwitterFill } from 'react-icons/ri'
import './FooterOverlay.css';

const FooterOverlay = () => (
  <div className='app__bg app__footerOverlay' >
    <div className="app__footer_content" >
      <p className="p__opensans" >Contact Us</p>
      <p className="p__opensans">Contact & Locate us now </p>
      <p className="p__opensans">Lapaz - Blk 45A, Nyormo Street </p>
      <p className="p__opensans">+233- 0200-9471-290 </p>
      <p className="p__opensans">C233- 0200-9471-020 </p>

    </div>
    <div className="app__footer_img">
      <div className="footer__img">
        <img src={images.gericht} alt="logo" />
      </div>
      <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, vero?</p>
      <SubHeading />
      <div className="app__footer_icons">
        <RiFacebookFill className='icons' />
        <RiInstagramLine className='icons' />
        <RiTwitterFill className='icons' />


      </div>
    </div>
    <div className="app__footer_content">
      <p className="p__opensans">Working Hours</p>
      <p className="p__opensans">Mon - Fri</p>
      <p className="p__opensans"> 10:00am - 2:00am</p>

      <p className="p__opensans">Sun - Sat</p>
      <p className="p__opensans">10:00am - 3:00am</p>
    </div>

  </div>
);

export default FooterOverlay;
