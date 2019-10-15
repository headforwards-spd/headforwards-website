import React from 'react'
import ImageHeader from './image-header-text-link-component'
import img from '../../img/curlyhair.png'
import { withKnobs, text, boolean, files } from '@storybook/addon-knobs'

const faker = require('faker')

const headerLabel = 'Header'
const defaultHeader = faker.lorem.sentence()

const paraLabel = 'Paragraph'
const defaultSentence = faker.lorem.paragraph()

const linkLabel = 'Link Text'
const defaultLinkText = faker.lorem.sentence()

const linkDestinationLabel = 'Link Destination'
const defaultLinkDestination = faker.internet.url()

const groupId = 'header-group'

const booleanLabel = 'Float image to the right'
const defaultValue = false

const imageLabel = 'Image'
const accept = '.png, .jpg, .jpeg'
const defaultImageValue = [img]

export default {
  decorators: [withKnobs],
  title: 'Container with Image, Header, Text and a Link',
}

export const textBlock = () => {
  const header = text(headerLabel, defaultHeader, groupId)
  const sentence = text(paraLabel, defaultSentence, groupId)
  const position = boolean(booleanLabel, defaultValue, groupId)
  const image = files(imageLabel, accept, defaultImageValue, groupId)
  const linkText = text(linkLabel, defaultLinkText, groupId)
  const linkDestination = text(
    linkDestinationLabel,
    defaultLinkDestination,
    groupId
  )

  const props = {
    title: header,
    text: sentence,
    position: position,
    image: image,
    linkText: linkText,
    linkDestination: linkDestination,
  }
  return <ImageHeader {...props} />
}
