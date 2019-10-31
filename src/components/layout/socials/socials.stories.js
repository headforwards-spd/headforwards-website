import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import React                        from 'react';
import Socials                      from './socials.component';

const faker = require('faker');

export default {
    title: 'Page Layout/Socials',
    decorators: [withKnobs],

}

export const SocialMediaIcons = () => {

    const props = {
        activeClass: 'is-active',
        twitterURL: text('Twitter URL', faker.internet.url()),
        facebookURL: text('Facebook URL', faker.internet.url()),
        instagramURL: text('Instagram URL', faker.internet.url()),
        linkedInURL: text('LinkedIn URL', faker.internet.url()),
        youtubeURL: text('YouTube URL', faker.internet.url()),
        isFooter: boolean('Is in footer?', faker.random.boolean())
    };

    return <Socials {...props} />
}
