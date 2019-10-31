import React       from 'react'
import Link        from '../../link/link.component'
import styles      from './footer.module.scss'
import Socials from '../socials/socials.component';

export default function Footer({companyInfo}) {
  const {email, address, phone } = companyInfo;
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

      <Socials {...{...companyInfo, isFooter}} />

      <section className={styles.ftLegal}>
        <ul>
          <li>
            <Link to={`mailto:${email}`}>{email}</Link>
          </li>
          <li>
            <span>//</span>
          </li>
          <li>
            <Link to={`tel:${phone}`}>{phone}</Link>
          </li>
        </ul>
        <ul>
          <li>{address}</li>
          <li>
            &copy; {thisYear} Headforwards
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
