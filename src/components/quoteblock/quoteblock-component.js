import React from 'react'
import Image from '../image/image-component'
import styles from './quoteblock-component.module.scss'

export default Quoteblock

function Quoteblock({ jobTitle, name, profilePic, quote }) {
  return (
    <div className={styles.blockquoteContainer}>
      <blockquote>{quote}</blockquote>
      <div className={styles.flexRow}>
        <div className={styles.imageCropper}>
          <Image className={styles.profilePicImage} image={profilePic} />
        </div>
        <div>
          <h1>{name}</h1>
          <p>{jobTitle}</p>
        </div>
      </div>
    </div>
  )
}
