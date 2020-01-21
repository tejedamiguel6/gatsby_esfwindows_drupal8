const path = require('path') 


// generate slug without spaces
module.exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions 
  if(node.internal.type === 'node__company'){
    console.log(JSON.stringify(node, undefined, 3))
    // grabbing info in that array of objects and
    // storing it into a variable named slug
    const oldSlug = `/${node.field_company[0].alt}/`
    // replacing the space with a dash in the slug. will help with SEO
    const slug = oldSlug.replace( " ", '-' )
    console.log('@@@@@&&&&&&&&&&', slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
      
    })
  }
}


// blog template slug
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions 
  if(node.internal.type === 'node__blog'){
    const oldSlug = node.title
    const slug = oldSlug.replace(' ', '-')
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}


// creating pages
module.exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
    query {
      allNodeBlog {
        edges {
          node {
            id
            title
            created(formatString: "MMMM D0, YYYY")
            fields {
              slug
            }
          }
        }
      }
    }
    `)
    res.data.allNodeBlog.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}


