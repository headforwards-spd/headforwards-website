import React from 'react'
import Image from '../image/image-component'
import { imageSliderBg } from './image-slider-component.module.scss'
import girl from '../../img/girl.png'

export function ImageSlider() {
  return (
    <div className={imageSliderBg}>
      <div>
        <h3> OUR STORY</h3>
        <div>
          <Image image={girl} />
        </div>
        <h1>The new option in software outsourcing</h1>
        <p>
          We are a British software outsourcing company based in the stunning
          location of Cornwall. Being in Cornwall is important to us. It enables
          us to get the perfect work life balance that we strive for.
        </p>
        <a href="#">Read the case study</a>
      </div>
      <div>
        <Image image={girl} />
      </div>
    </div>
  )
}
