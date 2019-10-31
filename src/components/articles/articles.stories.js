import { object, text, withKnobs } from '@storybook/addon-knobs'
import React                      from 'react'
import generateImage              from '../images/lib/generate-image'
import Articles                   from './articles.component'

const faker = require('faker')

export default {
  decorators: [withKnobs],
  title: 'Page Components/Articles',
}

const groupId = 'article-group'

const titleLabel = 'Header'
const titleValue = faker.lorem.words

const textValue = faker.lorem.paragraph;

const linkValue = () => `/${faker.lorem.slug()}`;

export const TwoColumns = () => {

  const props = {
    title: titleValue(),
    articles: [
        generateArticle(),
        generateArticle(),
    ]
  };

  return <Articles {...props} />
}

export const ThreeColumns = () => {

  const props = {
    title: titleValue(),
    articles: [
        generateArticle(),
        generateArticle(),
        generateArticle(),
    ]
  };

  return <Articles {...props} />
}

export const Interactive = () => {

  const articleProps = {
    title: text(titleLabel, titleValue(), groupId),
    articles: [
      object('First Article', generateArticle(), groupId),
      object('Second Article', generateArticle(), groupId),
    ]
  }

  return <Articles {...articleProps} />
}

function generateArticle() {

  return {
    title: titleValue(),
    text: textValue(),
    image: generateImage(),
    linkText: titleValue(),
    link: linkValue(),
  }
}
