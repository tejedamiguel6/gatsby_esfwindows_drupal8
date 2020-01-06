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

// creating pages

module.exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions

    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
    query {
      allNodePage {
        edges {
          node {
            id
            title
          }
        }
      }
    }
    
    `)
    res.data.allNodePage.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.id}`,
            context: {
                id: edge.node.id
            }
        })
    })
}


