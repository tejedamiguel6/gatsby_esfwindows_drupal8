const path = require('path') 

<<<<<<< HEAD

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
=======
// module.exports.onCreateNode = ({node, actions }) => {
//     const { createNodeField } = actions  

//     if(node.internal.type === 'MarkdownRemark'){
//         const slug = path.basename(node.fileAbsolutePath, '.md')

//         createNodeField({ 
//             node,
//             name: 'slug',
//             value: slug
//         })


//     }

// }



// might need to delte this 
module.exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    TypeNameinGraphql: {
      slug: {
        type: `string`,
        resolve: object => {
          const title = changeCase.paramCase(object.title)
          console.log('here is s@@@@@@@@ome @@@@@', title)

          return `/${title}`
        }
      }
    }
  }) 

>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
}


// creating pages
module.exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions
<<<<<<< HEAD
=======

>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
    query {
      allNodeBlog {
        edges {
          node {
            id
            title
            created(formatString: "MMMM D0, YYYY")
<<<<<<< HEAD
            fields {
              slug
            }
=======
          }
        }
      }
      allNodeCompany {
        edges {
          node {
            id
            title
            created
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
          }
        }
      }
    }
    `)
<<<<<<< HEAD
    res.data.allNodeBlog.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
=======
    if(res.errors) {
      console.log(res.errors)
    }
    console.log(JSON.stringify(res, undefined, 3))
    const { allNodeBlog, allNodeCompany } = res.data
    allNodeBlog.edges.forEach(({ node }) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${node.id}`,
            context: {
                id: node.id
            }
        })
    })


    // const homeTemplate = path.resolve.apply('./src/templates/home.js')
    // allNodeCompany.edges.forEach(({ node }) => {
    //   createPage({
    //     component: homeTemplate,
    //     path: `/home/${node.id}`,
    //     context: {
    //       id: node.id
    //     }
    //   })

    // })

>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
}


