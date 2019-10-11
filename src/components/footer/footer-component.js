import {faFacebookSquare, faInstagram, faLinkedinIn, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon}                                                   from '@fortawesome/react-fontawesome';
import React                                                               from 'react';
import {ftLegal, ftMobbing, ftSocial}                                      from './footer-component.module.scss';

export function Footer() {

    return (
        <footer>
            <section className={ftMobbing}>
                <h1>Want to know more about how we use mobbing to deliver quality software? <span><a href="#">Get in touch &#8594;</a></span>
                </h1>
            </section>
            <section className={ftSocial}>
                <ul>
                    <li><a href="#"><FontAwesomeIcon icon={faTwitter}/></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faFacebookSquare}/></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faInstagram}/></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faYoutube}/></a></li>
                </ul>
            </section>

            <section className={ftLegal}>
                <ul>
                    <li><a href="mailto:hello@headforwards.com">hello@headforwards.com</a></li>
                    <li><span>//</span></li>
                    <li><a href="tel:+44 (0)1209 311151">+44 (0)1209 311151</a></li>
                </ul>
                <ul>
                    <li>&copy; 2019 Headforwards, Pool Innovation Centre, Trevenson Rd, Redruth, Cornwall, TR15 3PL,
                        UK.
                    </li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms &amp; Conditions</a></li>
                </ul>
            </section>
        </footer>
    );
}