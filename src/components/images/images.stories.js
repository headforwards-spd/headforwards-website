import React                            from 'react'
import FullWidthImage                   from './full-width-image.component'
import {withKnobs, files, text, object} from '@storybook/addon-knobs'
import generateImage                    from './lib/generate-image'
import TwoImages                        from './two-images.component'

export default {
  decorators: [withKnobs],
  title: 'Page Components/Images',
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

export {default as BlogImages} from './blog/blog-images-story';
