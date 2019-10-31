import {Link} from 'gatsby';
import React  from 'react'
import Image  from '../../image/image-component'
import styles from './image-copy-columns.module.scss'

export default ImageCopyColumns

function ImageCopyColumns({
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
        <Image image={image} ratio='100%' className={styles.image}/>
        <section className={styles.copy}>
          <h1>{title}</h1>
          <p>{text}</p>
          {hasLink && <Link to={link}>{linkText}</Link>}
        </section>
      </section>
  )
}
