import { arrayOf, bool } from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Hero from '../../page-components/hero/hero.component';
import Image, { ImageSrcPropType } from '../../page-layout/image/image.component';
import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import Postit from '../../page-components/postit/postit.component';
import styles from './homepage.module.scss';

// const homepagePropTypes = {
//     page: [],
// };

export default HomepageTemplate;

// HomepageTemplate.propTypes = homepagePropTypes;
// HomepageTemplate.defaultProps = {
//     page: [],
// };

function HomepageTemplate({ introduction, sections }) {
    const [{ title, text }={}] = introduction || [];

    return (
        <>
            {introduction && (
                <section className={styles.introduction}>
                    {title && <h1>{title}</h1>}
                    <ReactMarkdown source={text} />
                </section>
            )}
            {!!sections && sections.map(section => <HomePageSection {...{ ...section }} />)}
        </>
    );
}

HomePageSection.propTypes = {
    isRightImage: bool,
    components: arrayOf(PageComponentPropType),
    isPostit: bool,
    image: ImageSrcPropType,
    imagePostit: ImageSrcPropType,
    imageSquare: ImageSrcPropType,
};
HomePageSection.defaultProps = {
    isRightImage: false,
    components: [],
    isPostit: false,
    image: null,
    imagePostit: null,
    imageSquare: null,
};

function HomePageSection({ components, isPostit, isRightImage, image, imagePostit, imageSquare }) {
    const hasImage = !!image || !!imagePostit || imageSquare;
    const wrapperStyles = [
        styles.section,
        isRightImage ? styles.isRightImage : '',
        hasImage ? styles.hasImage : '',
    ].join(' ');

    return (
        <section className={wrapperStyles}>
            {!!hasImage && <HomePageImage {...{ isPostit, image, imagePostit, imageSquare, isRightImage }} />}
            <section className={styles.components}>
                {!!components && components.map(component => <PageComponent {...component} />)}
            </section>
        </section>
    );
}

HomePageImage.propTypes = {
    image: ImageSrcPropType.isRequired,
    imagePostit: ImageSrcPropType,
    imageSquare: ImageSrcPropType,
    isPostit: bool,
    isRightImage: bool,
};
HomePageImage.defaultProps = {
    imagePostit: null,
    imageSquare: null,
    isPostit: false,
    isRightImage: false,
};
function HomePageImage({ isPostit, image, imagePostit, imageSquare, isRightImage }) {
    return isPostit ? (
        <Postit className={styles.postit} image={imagePostit || image} isRightImage={isRightImage} />
    ) : (
        <Image className={styles.image} image={imageSquare || image} ratio="100%" />
    );
}
