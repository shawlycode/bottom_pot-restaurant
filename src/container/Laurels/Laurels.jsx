import React from 'react';
import { data, images } from '../../constants'
import { SubHeading } from '../../components';

import './Laurels.css';


const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <div className="app__awardCard-wrapper">
      <img src={imgUrl} alt="laurel" />
      <div className="app__awardCard-info">
        <p className='p__opensans'>{title}</p>
        <p className='p__opensans'>{subtitle}</p>
      </div>
    </div>
  </div>
);

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels-awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="" />
    </div>

  </div>
);

export default Laurels;
