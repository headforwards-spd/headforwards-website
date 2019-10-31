import {Link} from 'gatsby';
import React  from 'react'
import Image  from '../../image/image-component'
import styles from './postit-copy-columns.module.scss'

export default PostitCopyColumns

function PostitCopyColumns({
  image,
  isRightImage,
  title,
  text,
  link,
  linkText
}) {
  const imageClass = isRightImage === true ? styles.isRightImage : '';
  const hasLink = !!link && !!linkText;

  return (
      <section className={`${styles.twoColumnsImageText} ${imageClass}`}>
        <div className={styles.postit}/>
        <section className={styles.copy}>
          <h1>{title}</h1>
          <p>{text}</p>
          {hasLink && <Link to={link} className={styles.arrowLink}>{linkText}</Link>}
        </section>
      </section>
  )
}
