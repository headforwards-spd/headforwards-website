import React                    from 'react'
import ImageSlider              from './image-slider-component';
import {files, text, withKnobs} from '@storybook/addon-knobs';

const faker = require('faker');

const groupId = 'slider-group';

const headerLabel = 'Header';
const paragraphLabel = 'Paragraph';
const defaultHeader = faker.lorem.sentence();
const paragraphText = faker.lorem.paragraph();
const linkLabel       = 'Link Text';
const defaultLinkText = faker.lorem.sentence();

const linkDestinationLabel   = 'Link Destination';
const defaultLinkDestination = faker.internet.url();

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
  const linkText        = text(linkLabel, defaultLinkText, groupId);
  const linkDestination = text(linkDestinationLabel, defaultLinkDestination, groupId);

  const sliderProps = {
    imageSlider: [
      {
        title: mainHeader,
        image: slideImg,
        text: paragraphText,
        link: linkDestination,
        label: linkText
      },
    ],
  };

  return <ImageSlider {...sliderProps} />
};
