import PropTypes                   from 'prop-types';
import React, {Component}          from 'react';
import { ReactComponent as Arrow } from '../../../static/img/hf-arrow.svg';
import Slider                      from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles                      from './image-slider-component.module.scss';
import Slide
                                   from './slide-component'

export default class ImageSlider extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        slides: PropTypes.arrayOf(PropTypes.any)
    };

    static defaultProps = {
        slides: []
    };

    state = {
        isChanging: false
    };

    render() {
        const {title, slides} = this.props;
        const settings      = {
            dots:           true,
            infinite:       true,
            speed:          500,
            slidesToShow:   1,
            slidesToScroll: 1,
            beforeChange: () => this.setState({isChanging: true}),
            afterChange: () => this.setState({isChanging: false}),
            prevArrow:      <button className={styles.prevArrow}><Arrow /></button>,
            nextArrow:      <button className={styles.nextArrow}><Arrow /></button>,
        };

        const headerClass = this.state.isChanging ? 'changing' : '';

        return (
            <section className={styles.imageSlider}>
                <h1 className={headerClass}>{title}</h1>
                <Slider {...settings}>
                    {slides.map((slide, key) => <Slide key={key} {...slide} />)}
                </Slider>
            </section>
        );
    };
};
