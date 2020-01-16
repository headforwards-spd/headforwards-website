import React         from 'react'
import ReactMarkdown from 'react-markdown'
import Image         from '../image/image.component'
import Link          from '../link/link.component'
import styles from './footer.module.scss'

export default FooterLink;

function FooterLink({showImages, link, page}) {

    const {frontmatter} = page;
    const {title, image, introduction} = frontmatter;
    const {image: bannerImage} = image;
    const {text} = introduction;

    return (
        <Link to={link}>
            <section>
                <h2>{title}</h2>
                {showImages && <Image alt={title} image={bannerImage} className={styles.footerLinkImage} />}
                <ReactMarkdown source={text} />
            </section>
        </Link>
    );
}
