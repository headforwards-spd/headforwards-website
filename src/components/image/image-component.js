import React from 'react'
export default Image

Image.defaultProps = {
  image: null,
  alt: null,
}

function Image({ image, alt, ...props }) {
  const { publicURL = null } = image || {}
  const src =
    image && image.hasOwnProperty('publicURL') ? image.publicURL : image

  return <img {...{ src, alt, ...props }} alt={alt} />
}
