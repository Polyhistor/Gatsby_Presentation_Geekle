const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            content
            title
            wordpress_id
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new errors("error with the data")
  }

  const { allWordpressPost } = result.data

  const postTemplate = path.resolve("./src/template/post.js")

  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `blog/${edge.node.slug}`,
      component: postTemplate,
      context: {
        id: edge.node.wordpress_id,
      },
    })
  })
}
