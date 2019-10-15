import React from 'react'
import Image from '../image/image-component'
import {
  flexRow,
  blockquoteContainer,
  imageCropper,
  profilePicImage,
} from './quoteblock-component.module.scss'

export default Quoteblock

function Quoteblock({ jobTitle, name, profilePic, quote }) {
  return (
    <div className={blockquoteContainer}>
      <blockquote>{quote}</blockquote>
      <div className={flexRow}>
        <div className={imageCropper}>
          <Image className={profilePicImage} image={profilePic} />
        </div>
        <div>
          <h1>{name}</h1>
          <p>{jobTitle}</p>
        </div>
      </div>
    </div>
  )
}
