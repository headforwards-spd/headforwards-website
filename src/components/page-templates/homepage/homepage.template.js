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

    const columnStyle = index => `${styles.imageCopyColumns} ${index % 2 ? styles.postitRight : ''}`;

    return (
        <>
            {!!sections &&
                sections.map(({ components, postit, image }, index) => (
                    <section className={columnStyle(index)}>
                        {!!image && <FullWidthImage image="/uploads/craig.jpg" />}
                        {!!postit && <Postit isRightImage={!!(index % 2)} />}
                        <section>
                            {!!components && components.map(component => <PageComponent {...component} />)}
                        </section>
                    </section>
                ))}
        </>
    );
}
