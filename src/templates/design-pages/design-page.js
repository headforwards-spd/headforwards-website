import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import DesignPageTemplate from '../../components/pages/design-page/design-page-template'

export default DesignPage
export const query = graphql`
  query PostPage {
    page: markdownRemark {
      frontmatter {
        title
        components {
          title
          text
          jobTitle
          name
          position
          quote
          twoColumns
          type
          articles {
            image {
              publicURL
            }
            title
            text
          }
          rightImage {
            publicURL
          }
          profilePic {
            publicURL
          }
          leftImage {
            publicURL
          }
          image {
            publicURL
          }
        }
      }
    }
  }
`

function DesignPage({ data }) {
  const { page } = data
  const { frontmatter } = page
  const { components } = frontmatter

  const pageProps = { components }

  return (
    <Layout>
      <DesignPageTemplate {...pageProps} />
    </Layout>
  )
}
