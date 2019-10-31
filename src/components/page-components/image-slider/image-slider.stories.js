import React                     from 'react'
import generateImage             from '../../../lib/generate-image'
import ImageSlider               from './image-slider.component';
import {object, text, withKnobs} from '@storybook/addon-knobs';

const faker = require('faker');

export default {
  decorators: [withKnobs],
  title: 'Page Components/Image Slider',
}

const groupId = 'slider-group';

const titleLabel = 'Header';
const titleValue = faker.lorem.words;

const textValue = faker.lorem.paragraph;

const linkTextValue  = faker.lorem.sentence;

const linkValue = () => `/${faker.lorem.slug()}`;

export const interactive = () => {

  const props = {
    title: text(titleLabel, titleValue(), groupId),
    slides: object('Articles', generateSlides(), groupId),
  };

  return <ImageSlider {...props} />
};

function generateSlides() {

  const count = faker.random.number({min: 2, max: 10});
  const slides = [];

  for(let i=0; i<count; i+=1) {
    slides.push(generateSlide());
  }

  return slides;

}

function generateSlide() {

  return {
    title: titleValue(),
    image: generateImage(),
    text: textValue(),
    linkText: linkTextValue(),
    link: linkValue()
  }

}
