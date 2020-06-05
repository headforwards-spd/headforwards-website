import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useMemo, useState } from 'react';

import styles from './covid-banner.module.scss';

export default CovidBanner;

const theWindow = typeof window !== 'undefined' ? window : null;

function CovidBanner() {
    const hasDismissed = useMemo(() => {
        return theWindow ? localStorage.getItem('covidDismiss') : false;
    }, []);
    const [showMessage, setShowMessage] = useState(hasDismissed);
    const handleDismiss = useCallback(() => {
        localStorage.setItem('covidDismiss', true);
        setShowMessage(true);
    }, [setShowMessage]);

    return !showMessage ? (
        <div className={styles.covidBanner}>
            <section>
                <h2>COVID-19</h2>
                <section>
                    <p>
                        The health of our team along with business continuity are our priorities at this time. Our teams
                        are now working from home and continuing with projects as normal.
                    </p>
                    <p>
                        All phones and emails are being monitored as usual so if you have an enquiry or any questions,
                        please get in touch.
                    </p>
                </section>
            </section>
            <button type="button" onClick={handleDismiss} aria-label="close">
                <Icon icon={faTimes} />
            </button>
        </div>
    ) : null;
}
