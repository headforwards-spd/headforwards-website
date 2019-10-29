import React from 'react'
import GatsbyImage from 'gatsby-image';
import styles from './image-component.module.scss';
export default Image

Image.defaultProps = {
  image: null,
  alt: null,
  ratio: '62.5%'
};

function Image({ image, alt, ratio, className='', ...props }) {

  const { childImageSharp = null } = image || {};
  if(childImageSharp) {
    const {fluid} = childImageSharp;
    return <GatsbyImage fluid = {fluid} durationFadeIn={5000} className={className} {...props}/>;
  }
  const src = image && image.hasOwnProperty('publicURL') ? image.publicURL : image;

  console.log({className});

  return (
      <div className={`${styles.imageWrapper} ${className}`}>
          <div className={styles.padder} style={{paddingBottom: ratio}} />
          <img {...{ src, alt, ...props }} className={styles.image} alt={alt} />
      </div>
  );
}
