import React  from 'react'
import Image  from '../../image/image.component'
import styles from './quote.module.scss'

export default Quote

function Quote({ jobTitle, name, profilePic, quote }) {
  return (
    <div className={styles.blockquoteContainer}>
      <blockquote>{quote}</blockquote>
        {!!name && <div className={styles.flexRow}>
            {!!profilePic && <div className={styles.imageCropper}>
          <Image className={styles.profilePicImage} image={profilePic} ratio='100%'/>
        </div>}
        <div>
          <h1>{name}</h1>
            {!!jobTitle && <p>{jobTitle}</p>}
        </div>
      </div>}
    </div>
  )
}
