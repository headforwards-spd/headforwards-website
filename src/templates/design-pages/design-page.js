import { graphql } from 'gatsby'
import React       from 'react'
import Layout from '../../components/Layout'
import DesignPageTemplate
                   from '../../components/pages/design-page/design-page-template'

export default DesignPage;
export const query = graphql`
  query PostPage {
    page: markdownRemark {
              frontmatter {
          title
          components {
            description
            header
            heading
            jobTitle
            name
            position
            quote
            sentence
            twoColumns
            type
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
            fullWidthImage {
              publicURL
            }
          }
        }
    }
  }
`;

function DesignPage({data}) {

  const {page} = data;
  const {frontmatter} = page;
  const {components} = frontmatter;

  const pageProps = {components};

  return (
      <Layout>
        <DesignPageTemplate {...pageProps}/>
      </Layout>)
}
