import React                    from 'react'
import BlogImages               from './blog-images.component'
import FullWidthImage           from './full-width-image.component'
import {withKnobs, files, text, object} from '@storybook/addon-knobs'
import TwoImages                from './two-images.component'

export default {
  decorators: [withKnobs],
  title: 'Images',
}

const faker = require('faker');

export const fullWidthImage = () => {
  const fullWidthImageLabel = 'Full Width Image';
  const accept = '.png, .jpg, .jpeg';
  const defaultImgValue = generateImage();
  const groupId = 'img-group';

  const fullWidthImg = files(
    fullWidthImageLabel,
    accept,
    defaultImgValue,
    groupId
  )

  const imgProps = {
    image: fullWidthImg,
  }

  return <FullWidthImage {...imgProps} />
}

export const twoImages = () => {
  const leftImageLabel = 'Left Image';
  const leftImageValue = generateImage();
  const rightImageLabel = 'Right Image';
  const rightImageValue = generateImage();
  const accept = '.png, .jpg, .jpeg';
  const groupId = 'img-group';

  const leftImage = files(leftImageLabel, accept, leftImageValue, groupId)
  const rightImage = files(rightImageLabel, accept, rightImageValue, groupId)

  const twoImgProps = {
    leftImage,
    rightImage,
  }

  return <TwoImages {...twoImgProps} />
}

export const blogImages = () => {

  const groupId = 'blog-group';

  const headerLabel = 'Header';
  const defaultHeader = faker.lorem.words();

  const title = text(headerLabel, defaultHeader, groupId);
  const articles = object('Articles', generateArticles(), groupId);

  const blogProps = {
    title,
    articles
  };

  return <BlogImages {...blogProps} />
}

function generateImage() {
  return {publicURL: `${faker.image.imageUrl(1024,640)}?${faker.random.number()}`};
}

function generateArticles() {

  const count = faker.random.number({min:2,max:3});
  const articles = [];

  for (let i=0; i<count; i+=1) {
    articles.push(generateArticle());
  }

  return articles;
}

function generateArticle() {

  return {
    title: faker.lorem.words(),
    image: generateImage(),
  }
}
