import { arrayOf, shape, string } from 'prop-types';
import React, { Component } from 'react';
import Slider from 'react-slick';
import { ReactComponent as Arrow } from '../../../../static/images/hf-arrow.svg';
import './slick.css';
import './slick-theme.css';
import styles from './content-slider.module.scss';
import Slide, { SlidePropType } from './slide.component';

const contentSliderPropTypes = {
    title: string.isRequired,
    articles: arrayOf(SlidePropType),
};

export const ContentSliderPropType = shape(contentSliderPropTypes);

export default class ContentSlider extends Component {
    static propTypes = contentSliderPropTypes;

    static defaultProps = {
        articles: [],
    };

    state = {
        isChanging: false,
    };

    render() {
        const { title, articles } = this.props;
        const { isChanging } = this.state;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            beforeChange: () => this.setState({ isChanging: true }),
            afterChange: () => this.setState({ isChanging: false }),
            prevArrow: (
                <button type="button" className={styles.prevArrow} aria-label="Previous Slide">
                    <Arrow />
                </button>
            ),
            nextArrow: (
                <button type="button" className={styles.nextArrow} aria-label="Next Slide">
                    <Arrow />
                </button>
            ),
        };

        const headerClass = isChanging ? 'changing' : '';

        return (
            <section className={styles.contentSlider}>
                <h2 className={headerClass}>{title}</h2>
                <Slider {...settings}>
                    {articles.map(({ id, ...slide }) => (
                        <Slide key={id} {...slide} />
                    ))}
                </Slider>
            </section>
        );
    }
}
