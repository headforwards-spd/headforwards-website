import { boolean, text } from '@storybook/addon-knobs'
import React             from 'react'
import Footer            from './footer.component'

const faker = require('faker')
export default {
  title: 'Page Layout/Footer',
}

const addressValue = () => {

    return [
        faker.address.streetAddress(),
        faker.address.city(),
        faker.address.county(),
        faker.address.countryCode(),
    ].join(', ');
}

export const Interactive = () => {

  const companyInfo = {
      email: text('Email Address', faker.internet.email()),
      phone: text('Phone Number', faker.phone.phoneNumberFormat(1)),
      address: text('Address', addressValue()),
      twitterURL: text('Twitter URL', faker.internet.url()),
      facebookURL: text('Facebook URL', faker.internet.url()),
      instagramURL: text('Instagram URL', faker.internet.url()),
      linkedInURL: text('LinkedIn URL', faker.internet.url()),
      youtubeURL: text('YouTube URL', faker.internet.url()),
      isFooter: boolean('Is in footer?', faker.random.boolean())
  };

  return <Footer {...{companyInfo}}/>
}
