import React      from 'react'
import {Link} from 'gatsby'
import styles     from './footer-component.module.scss'
import { Socials } from '../socials/socials-component';

export default function Footer({company_info}) {
  const {email} = company_info;
  const isFooter = true;
  const thisYear = (new Date()).getFullYear()
  return (
    <footer>
      <section className={styles.ftMobbing}>
        <h1>
          Want to know more about how we use mobbing to deliver quality
          software?
          <Link to="get-in-touch">Get in touch</Link>
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
            &copy; {thisYear} Headforwards, Pool Innovation Centre, Trevenson Rd,
            Redruth, Cornwall, TR15 3PL, UK.
          </li>
          <li>
            <Link to="privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="terms-and-conditions">Terms &amp; Conditions</Link>
          </li>
        </ul>
      </section>
    </footer>
  )
}
