import React from 'react'
import {Link} from 'gatsby'
import Image from '../image/image-component'
import styles from './image-slider-component.module.scss'

export default function Slide({title, text, image}) {

    return (
        <section className={styles.slide}>
            <section>
                <h1>{title}</h1>
                <h2>Our Story</h2>
                <p>{text}</p>
                <Link to={'/'}>Read the case study</Link>
            </section>
            <Image className={styles.slideImage} image={image}/>
        </section>

        // <div>
        //     <div className={`${flexRow}`}>
        //         <div className={flexCol}>
        //             <h2 className={hiddenMobile}>Our story</h2>
        //             <h1>{title}</h1>
        //             <p>{text}</p>
        //             {/*<Link to={slide.link}>{slide.label}</Link>*/}
        //             <a href="#">Read the case study</a>
        //         </div>
        //         <div className={flexCol}>
        //             <h2 className={hiddenDesktop}>Our Story</h2>
        //             <Image image={image}/>
        //         </div>
        //     </div>
        // </div>
    );
}
