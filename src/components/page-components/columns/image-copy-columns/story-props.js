import generateImage from '../../../../lib/generate-image';

const faker = require('faker');

export const groupId = 'header-group';
export const titleLabel = 'Title';
export const titleValue = faker.lorem.sentence;
export const textLabel = 'Copy';
export const textValue = faker.lorem.paragraph;
export const linkTextLabel = 'Link Text';
export const linkTextValue = faker.lorem.words;
export const linkLabel = 'Link Destination';
export const linkValue = () => `/${faker.lorem.slug()}`;
export const isRightImageLabel = 'Image on the right';
export const isRightImageValue = () => true;
export const imageLabel = 'Image';
export const accept = '.png, .jpg, .jpeg';
export const imageValue = () => generateImage(true);
