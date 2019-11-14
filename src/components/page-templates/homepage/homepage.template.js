import React from 'react';
import FullWidthImage from '../../page-components/images/full-width/full-width-image.component';
import PageComponent from '../../page-components/page-component';
import Postit from '../../page-components/postit/postit.component';
import styles from './homepage.module.scss';

const homepagePropTypes = {
    page: [],
};

export default HomepageTemplate;

HomepageTemplate.propTypes = homepagePropTypes;
HomepageTemplate.defaultProps = {
    page: [],
};

function HomepageTemplate({ page }) {
    const { sections } = page;
    return (
        <>
            {!!sections &&
                sections.map(({ components, postit, image }, index) => (
                    <section style={{ display: 'flex' }} className={index % 2 ? '' : styles.postitRight}>
                        {!!image && <FullWidthImage image="/uploads/craig.jpg" />}
                        {!!postit && <Postit />}

                        <section>
                            {!!components && components.map(component => <PageComponent {...component} />)}
                        </section>
                    </section>
                ))}
        </>
    );
}
