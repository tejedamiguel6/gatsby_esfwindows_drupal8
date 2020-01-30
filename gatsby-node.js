<<<<<<< HEAD
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
=======
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
>>>>>>> 99686ba17ec836a534757918cd0ed2c2a126fa56
}

// creating pages
<<<<<<< HEAD
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
=======
module.exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions
<<<<<<< HEAD
=======

>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
>>>>>>> 99686ba17ec836a534757918cd0ed2c2a126fa56
    query {
      allNodeBlog {
        edges {
          node {
            id
            title
<<<<<<< HEAD
            fields {
              slug
            }
=======
            created(formatString: "MMMM D0, YYYY")
<<<<<<< HEAD
            fields {
              slug
            }
=======
>>>>>>> 99686ba17ec836a534757918cd0ed2c2a126fa56
          }
        }
      }
      allNodeWindows {
        edges {
          node {
            id
            title
<<<<<<< HEAD
=======
            created
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
>>>>>>> 99686ba17ec836a534757918cd0ed2c2a126fa56
          }
        }
      }
    }
<<<<<<< HEAD
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
=======
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
>>>>>>> 99686ba17ec836a534757918cd0ed2c2a126fa56
}
