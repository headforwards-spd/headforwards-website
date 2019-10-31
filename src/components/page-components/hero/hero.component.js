import React  from 'react'
import styles from './hero.module.scss'

export default function Hero({ title, text, isTwoColumns=false }) {
  const columnsClass = isTwoColumns ? styles.isTwoColumns : '';
  return (
    <section className={`${styles.hero} ${columnsClass}`}>
        <h1>{title}</h1>
        <p>{text}</p>
    </section>
  )
}
