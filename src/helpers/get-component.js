import React          from 'react'
import ArticleBlock   from '../components/article-block/article-block-component'
import { HeaderText } from '../components/header-text/header-text-component'
import ImageHeader    from '../components/image-header-text-link/image-header-text-link-component'
import {
  FullWidthImage,
  TwoImages,
}                     from '../components/images/images-component'
import Navbar         from '../components/navbar/navbar-component';
import Quoteblock     from '../components/quoteblock/quoteblock-component'

export default ({ type, ...component }) => {
  switch (type) {
    case 'heading':
      return <HeaderText {...component} />
    case 'fullWidthImageComponent':
      return <FullWidthImage {...component} />
    case 'twoImageComponent':
      return <TwoImages {...component} />
    case 'blockQuoteComponent':
      return <Quoteblock {...component} />
    case 'imageWithTextComponent':
      return <ImageHeader {...component} />
    case 'articleBlockComponent':
      return <ArticleBlock {...component} />
    case 'navbarComponent':
      return <Navbar {...component} />
    default:
      return <p>{component.text}</p>
  }
}
