import React                    from 'react'
import ImageSlider              from './image-slider-component';
import {files, text, withKnobs} from '@storybook/addon-knobs';

const faker = require('faker');

const groupId = 'slider-group';

const headerLabel = 'Header';
const paragraphLabel = 'Paragraph';
const defaultHeader = faker.lorem.sentence();
const paragraphText = faker.lorem.paragraph();

const imgLabel = 'Image';
const accept = '.png, .jpg, .jpeg';
const defaultImgVal = [];


export default {
  decorators: [withKnobs],
  title: 'Image Slider',
}

export const imageSlider = () => {

  const mainHeader = text(headerLabel, defaultHeader, groupId);
  const paragraphText = text(paragraphLabel, paragraphText, groupId);
  const slideImg = files(imgLabel, accept, defaultImgVal, groupId);

  const sliderProps = {
    slider: [
      {
        title: mainHeader,
        image: slideImg,
        text: paragraphText,
      },
    ],
  }
  return <ImageSlider />
}
