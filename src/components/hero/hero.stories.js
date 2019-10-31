import React from 'react'
import Hero from './hero.component'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

const faker = require('faker');

export default {
  decorators: [withKnobs],
  title: 'Page Components/Hero',
}

const groupId = 'header-group';

const titleLabel = 'Header';
const titleValue = faker.lorem.sentence;

const textLabel = 'Paragraph';
const textValue = faker.lorem.paragraph;

const isTwoColumnsLabel = 'Split into two columns';
const isTwoColumnsValue = () => false;

export const oneColumn = () => {

  const props = {
    title: titleValue(),
    text: textValue()
  };

  return <Hero {...props}/>
};

export const twoColumns = () => {

  const props = {
    title: titleValue(),
    text: textValue(),
    isTwoColumns: true,
  };

  return <Hero {...props}/>
};

export const interactive = () => {

  const props = {
    title: text(titleLabel, titleValue(), groupId),
    text: text(textLabel, textValue(), groupId),
    isTwoColumns: boolean(isTwoColumnsLabel, isTwoColumnsValue(), groupId),
  }

  return <Hero {...props} />
}
