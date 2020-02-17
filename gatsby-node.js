const path = require("path")

// blog template slug
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.owner === 'gatsby-source-drupal') {
    // console.log(JSON.stringify(node, undefined, 3))
    const oldSlug = node.title
    const slug = oldSlug.toLowerCase(oldSlug).split(' ').join('-')
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  } if (node.internal.type === "menu_link_content__menu_link_content") {
    const navTitle = node.title
    const lowerCaseNav = navTitle
      .toLowerCase(navTitle)
      .split(" ")
      .join("-")
    createNodeField({
      node,
      name: "lowerCaseMenuTitle",
      value: lowerCaseNav,
    })
  }
}


// creating pages
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  // creating product template
  const productsTemplate = path.resolve('./src/templates/products.js')
  // creating materials template
  const materialTemplate = path.resolve('./src/templates/materials.js')

  const res = await graphql(`
    query {
      allNodeBlog {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeProducts {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeMaterials {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (res.errors) {
    console.log(res.errors)
  }
  console.log(JSON.stringify(res, null, 3))
  const { allNodeBlog, allNodeProducts, allNodeMaterials } = res.data
  allNodeBlog.edges.forEach(({ node }) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${node.fields.slug}`,
      context: {
        slug: node.fields.slug,
      },
    }),
      // create Products page
      allNodeProducts.edges.forEach(({ node }) => {
        createPage({
          component: productsTemplate,
          path: `/products/${node.fields.slug}`,
          context: {
            slug: node.fields.slug
          }
        })
      }),
      // creating materials pages
      allNodeMaterials.edges.forEach(({ node }) => {
        createPage({
          component: materialTemplate,
          path: `/materials/${node.fields.slug}`,
          context: {
            slug: node.fields.slug
          }
        })
      })

  })

}
