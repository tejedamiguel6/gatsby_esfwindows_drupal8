const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "node__blog") {
    // console.log(JSON.stringify(node, undefined, 3))
    const oldSlug = node.title
    const slug = oldSlug.toLowerCase(oldSlug).replace(" ", "-")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  } else if (node.internal.type === "menu_link_content__menu_link_content") {
    const navTitle = node.title
    const lowerCaseNav = navTitle
      .toLowerCase(navTitle)
      .split(" ")
      .join("-")
    // console.log("@@@@####", lowerCaseNav)
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
      allNodeWindows {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)
  if (res.errors) {
    console.log(res.errors)
  }
  console.log(JSON.stringify(res, null, 3))
  const { allNodeBlog, allNodeWindows } = res.data
  allNodeBlog.edges.forEach(({ node }) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${node.fields.slug}`,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
