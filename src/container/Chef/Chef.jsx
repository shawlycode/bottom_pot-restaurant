import React from 'react';
import { images } from '../../constants'
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title={'Chefs Word'} />
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans"> Lorem ipsum dolor sit am adipisicing elit. Et, exercitationem. </p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, alias? Ducimus dolorem dicta, sunt itaque assumenda, repellendus repellat suscipit eius incidunt earum esse tenetur, dolores illum? Pariatur quod consectetur laudantium!.</p>

      </div>
      <div className="app__chef-sign">
        <p>Kelvin Luo</p>
        <p className="p__opensans"> Chef & Founder</p>
        <img src={images.sign} alt="chef sign" />
      </div>
    </div>
  </div>
);

export default Chef;
