import React from 'react';

import {SubHeading} from '../../components';
import {images} from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef'/>
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Words"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>
    
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote'/>
          <p className='p__opensans'>Each dish tells a story, woven with ingredients sourced with care.</p> 
          </div>
          <p className='p__opensans'>techniques mastered with precision, and a touch of culinary magic. Join me on a gastronomic adventure where the artistry of food meets the joy of savoring life's delectable moments.</p>
          </div>
          
          <div className='app__chef-sign'>
            <p>Kevin Luo</p>
            <p className='p__opensans'>Chef & Founder</p>
            <img src={images.sign} alt='sign'/>
          </div>
        </div>
      </div>
);

export default Chef;
