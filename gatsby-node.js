const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return getData(graphql)
    .then(({ data, errors }) =>
      !errors ? Promise.resolve(data) : Promise.reject(errors)
    )
    .then(({ designPages }) => createAllPosts(createPage, designPages))
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  const { internal = null } = node;
  const { type } = internal;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    return createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
  return Promise.resolve()
}

function createAllPosts(createPage, { edges: posts = [] }) {
  // const firstIndex = 0;
  // const lastIndex = posts.length - 1;

  return Promise.all(
    posts.map(({ node: post }, index) => {
      const { id, fields, frontmatter } = post;
      const { slug } = fields;
      const { path: postPath, type } = frontmatter;

      // const { id: prevId = '' } = index > firstIndex ? posts[index - 1].node : {};
      // const { id: nextId = '' } = index < lastIndex ? posts[index + 1].node : {};

      return createPage({
        path: slug,
        component: path.resolve(`src/templates/${postPath}/${type}-page.js`),
        context: { id }, //, prevId, nextId },
      })
    })
  )
}

//
//   return graphql(`
//     {
//       allMarkdownRemark(limit: 1000) {
//         edges {
//           node {
//             id
//             fields {
//               slug
//             }
//             frontmatter {
//               tags
//               templateKey
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       result.errors.forEach(e => console.error(e.toString()))
//       return Promise.reject(result.errors)
//     }
//
//     const posts = result.data.allMarkdownRemark.edges
//
//     posts.forEach(edge => {
//       const id = edge.node.id
//       createPage({
//         path: edge.node.fields.slug,
//         tags: edge.node.frontmatter.tags,
//         component: path.resolve(
//           `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
//         ),
//         // additional data can be passed via context
//         context: {
//           id,
//         },
//       })
//     })
//
//     // Tag pages:
//     let tags = []
//     // Iterate through each post, putting all found tags into `tags`
//     posts.forEach(edge => {
//       if (_.get(edge, `node.frontmatter.tags`)) {
//         tags = tags.concat(edge.node.frontmatter.tags)
//       }
//     })
//     // Eliminate duplicate tags
//     tags = _.uniq(tags)
//
//     // Make tag pages
//     tags.forEach(tag => {
//       const tagPath = `/tags/${_.kebabCase(tag)}/`
//
//       createPage({
//         path: tagPath,
//         component: path.resolve(`src/templates/tags.js`),
//         context: {
//           tag,
//         },
//       })
//     })
//   })
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
//   fmImagesToRelative(node) // convert image paths for gatsby images
//
//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

function getData(graphql) {
  return graphql(`
    {
      designPages: allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              type
              path
            }
          }
        }
      }
    }
  `)
}
