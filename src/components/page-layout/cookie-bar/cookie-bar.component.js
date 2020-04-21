import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

import styles from './cookie-bar.module.scss';

export default class CookieBar extends Component {
    state = { active: false };

    toggleClass() {
        this.setState(({ active }) => ({ active: !active }));

        if (typeof window !== 'undefined') {
            localStorage.setItem('covidDismiss', true);
        }
    }

    render() {
        const { active } = this.state;
        const { toggleClass } = this;

        const dismissed = typeof window !== 'undefined' ? localStorage.getItem('covidDismiss') : false;
        return (
            <div>
                {!dismissed && (
                    <div className="dismissed">
                        <div className={styles.cookieBar}>
                            <span className={styles.message}>
                                <h1>COVID-19</h1>
                                The health of our team along with business continuity are our priorities at this time.
                                Our teams are now working from home and continuing with projects as normal.
                                <br />
                                All phones and emails are being monitored as usual so if you have an enquiry or any
                                questions, please get in touch.
                            </span>
                            <button
                                type="button"
                                className={`${styles.close} ${!active && 'hide'} hide`}
                                onClick={toggleClass.bind(this)}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
