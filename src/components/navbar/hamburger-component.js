import React  from 'react'
import styles from './hamburger-component.module.scss'

export default function Hamburger({active, onClick}) {

    return (
        <button onClick={onClick} className={`${active} ${styles.hamburger} ${styles.hamburgerSlider}`} type="button">
                          <span className={styles.hamburgerBox}>
                            <span className={styles.hamburgerInner}></span>
                          </span>
        </button>
    );
}
