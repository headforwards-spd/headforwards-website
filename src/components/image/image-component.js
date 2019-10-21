import React from 'react'
import GatsbyImage from 'gatsby-image';
export default Image

Image.defaultProps = {
  image: null,
  alt: null,
};

function Image({ image, alt, ...props }) {

  const { childImageSharp = null } = image || {};
  if(childImageSharp) {
    const {fluid} = childImageSharp;
    return <GatsbyImage fluid = {fluid} durationFadeIn={5000}/>;
  }
  const src =
    image && image.hasOwnProperty('publicURL') ? image.publicURL : image;

  return <img {...{ src, alt, ...props }} alt={alt} />
}
