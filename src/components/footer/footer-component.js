import React      from 'react'
import styles     from './footer-component.module.scss'
import { Socials } from '../socials/socials-component';

export default function Footer({company_info}) {
  const {email} = company_info;
  const isFooter = true;
  return (
    <footer>
      <section className={styles.ftMobbing}>
        <h1>
          Want to know more about how we use mobbing to deliver quality
          software?{' '}
          <span>
            <a href="#">Get in touch &#8594;</a>
          </span>
        </h1>
      </section>
      <Socials {...{...company_info, isFooter}} />

      <section className={styles.ftLegal}>
        <ul>
          <li>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            <span>//</span>
          </li>
          <li>
            <a href="tel:+44 (0)1209 311151">+44 (0)1209 311151</a>
          </li>
        </ul>
        <ul>
          <li>
            &copy; 2019 Headforwards, Pool Innovation Centre, Trevenson Rd,
            Redruth, Cornwall, TR15 3PL, UK.
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms &amp; Conditions</a>
          </li>
        </ul>
      </section>
    </footer>
  )
}
