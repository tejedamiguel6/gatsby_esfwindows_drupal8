const path = require('path') 

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
          }
        }
      }
      allNodeCompany {
        edges {
          node {
            id
            title
            created
          }
        }
      }
    }
    `)
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

}


