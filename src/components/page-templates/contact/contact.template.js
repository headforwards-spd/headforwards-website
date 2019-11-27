import { string } from 'prop-types';
import React from 'react';
import styles from './contact.module.scss';

const contactPropTypes = {
    email: string,
    phone: string,
    address: string,
};

export default ContactTemplate;

ContactTemplate.propTypes = contactPropTypes;
ContactTemplate.defaultProps = {
    email: '',
    phone: '',
    address: '',
};

function ContactTemplate({ email, phone, address }) {
    const formattedAddress = address.split(',').join('<br>');

    return (
        <>
            <section className={styles.contactStyles}>
                <div className={styles.flexSection}>
                    <h1 className={styles.flexSection}>We would love to talk business with you.</h1>
                </div>
                <div className={styles.flexSection}>
                    <div className={styles.contactStyles}>
                        <div className={styles.flexSection}>
                            <p>Headforwards</p>
                            {formattedAddress}
                        </div>
                        <div className={styles.flexSection}>
                            <p>Telephone.</p>
                            <p className={styles.bold}>{phone}</p>
                            <p>Email.</p>
                            <p className={styles.bold}>{email}</p>
                        </div>
                    </div>
                    <div className={styles.contactStyles}>
                        <div className={styles.flexSection}>
                            <h1>Send us a message...</h1>
                        </div>
                    </div>
                    <div className={styles.contactStyles}>
                        <form name="contact" method="POST" data-netlify="true">
                            <div
                                style={{
                                    display: 'flex',
                                }}
                            >
                                <div>
                                    <span>Your Name</span>
                                    <div>
                                        <input />
                                    </div>
                                </div>
                                <div>
                                    <span>Your Business</span>
                                    <div>
                                        <input />
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                }}
                            >
                                <div>
                                    <span>Telephone Number</span>
                                    <div>
                                        <input />
                                    </div>
                                </div>
                                <div>
                                    <span>Email Address</span>
                                    <div>
                                        <input />
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <div>
                                    <span>Enquiry</span>
                                    <div>
                                        <textarea />
                                    </div>
                                </div>
                            </div>
                            <button>Send form</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
        // <>
        //     <section className={styles.contactStyles}>
        //         <div className={styles.flexSection}>
        //             <p>Headforwards</p>
        //             {address}
        //         </div>

        //     </section>
        //     <section className={styles.contactStyles}>
        //     </section>
        //     <section className={`${styles.contactStyles} ${styles.mapStyles}`}>
        //         <iframe
        //             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10209.86529296384!2d-5.277547317504885!3d50.22719254513101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2e9abde5167232ca!2sHeadforwards!5e0!3m2!1sen!2suk!4v1523621792407"
        //             width="100%"
        //             height="350"
        //             frameBorder="0"
        //             allowFullScreen
        //         />
        //     </section>
        //     ;
        //     <section className={styles.contactStyles} />;{' '}
        // </>
    );
}
