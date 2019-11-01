import { shape, string, arrayOf } from 'prop-types';
import React, { Component } from 'react';
import Slider from 'react-slick';
import { ReactComponent as Arrow } from '../../../../static/img/hf-arrow.svg';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from './image-slider.module.scss';
import Slide, { SlidePropType } from './slide.component';

const imageSliderPropTypes = {
    title: string.isRequired,
    slides: arrayOf(SlidePropType),
};

export const ImageSliderPropType = shape(imageSliderPropTypes);

export default class ImageSlider extends Component {
    static propTypes = imageSliderPropTypes;

    static defaultProps = {
        slides: [],
    };

    state = {
        isChanging: false,
    };

    render() {
        const { title, slides } = this.props;
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
                <button type="button" className={styles.prevArrow}>
                    <Arrow />
                </button>
            ),
            nextArrow: (
                <button type="button" className={styles.nextArrow}>
                    <Arrow />
                </button>
            ),
        };

        const headerClass = isChanging ? 'changing' : '';

        return (
            <section className={styles.imageSlider}>
                <h1 className={headerClass}>{title}</h1>
                <Slider {...settings}>
                    {slides.map((slide, key) => (
                        <Slide key={key} {...slide} />
                    ))}
                </Slider>
            </section>
        );
    }
}
