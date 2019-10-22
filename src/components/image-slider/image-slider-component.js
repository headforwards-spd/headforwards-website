import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Image  from '../image/image-component'


export function ImageSlider() {
    const [index, setIndex] = useState(0);
    const { allFile } = useStaticQuery(
        graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "slides" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
    );
    //Minus 1 for array offset from 0
    const length = allFile.edges.length - 1;
    const handleNext = () =>
        index === length ? setIndex(0) : setIndex(index + 1);
    const handlePrevious = () =>
        index === 0 ? setIndex(length) : setIndex(index - 1);
    const { node } = allFile.edges[index];
    return (
        <div>
            <div>
                <Image
                    fluid={node.childImageSharp.fluid}
                    key={node.id}
                    alt={node.name.replace(/-/g, ' ').substring(2)}
                />
            </div>
            <div>
                <button onClick={() => handlePrevious()}>Previous</button>
                <button onClick={() => handleNext()}>Next</button>
            </div>
        </div>
    )
}