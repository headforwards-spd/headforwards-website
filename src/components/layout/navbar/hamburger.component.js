import React  from 'react'
import styles from './hamburger.module.scss'

export default Hamburger;

function Hamburger({activeClass, onClick}) {

    console.log({activeClass});

    return (
        <button onClick={onClick} className={`${activeClass} ${styles.hamburger} ${styles.hamburgerSlider}`} type="button">
                          <span className={styles.hamburgerBox}>
                            <span className={styles.hamburgerInner}></span>
                          </span>
        </button>
    );
}
