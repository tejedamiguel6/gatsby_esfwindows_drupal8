const path = require('path')



// blog template slug
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'node__blog') {
    // console.log(JSON.stringify(node, undefined, 3))
    const oldSlug = node.title
    const slug = oldSlug.toLowerCase(oldSlug).replace(" ", '-')
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  } else if (node.internal.type === 'menu_link_content__menu_link_content') {
    console.log('@@@@@@MIGUEL TEJEDA@@@@@@@@@@@@@@@@@@@@@@@', JSON.stringify(node, undefined, 3))


    // // creating a submenu
    const drupalParentID = node.drupal_id

    const child = node.drupal_parent_menu_item

    console.log(child, 'children submenu')
    const title = node.title
    console.log('PARENT PARENT PARENT', drupalParentID)
    if (drupalParentID === '4b7750d8-0c73-47e5-897c-126cf1f33aa1')
      console.log('this is ', title, '!!!!&&******#########parent link')






    // const childMenuID = node.drupal_parent_menu_item
    // console.log('CHILD CHILD CHILD', childMenuID)


    // let result 

    // if(drupalParentID === childMenuID){
    //   console.log(result, 'these two are the same!!!!!')

    // }


    // console.log('parentmenu', drupalParentID)
    // console.log('CHLD MENU ID IS HERE!!!', childMenuID)





    const navTitle = node.title
    const lowerCaseNav = navTitle.toLowerCase(navTitle).split(' ').join('-')
    createNodeField({
      node,
      name: 'lowerCaseMenuTitle',
      value: lowerCaseNav
    })

  }


}


// drupal_parent_menu_item": "menu_link_content:4b7750d8-0c73-47e5-897c-126cf1f33aa1


// drupal_parent_menu_item": "menu_link_content:4b7750d8-0c73-47e5-897c-126cf1f33aa1















// creating pages
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const res = await graphql(`
    query {
      allNodeWoodWoodClad {
        edges {
          node {
            id
            title
          }
        }
      }
      allNodeUpvc {
        edges {
          node {
            id
            title
          }
        }
      }
      allNodeSteelCustom {
        edges {
          node {
            id
            title
          }
        }
      }
      allNodeShadingProducts {
        edges {
          node {
            id
            title
          }
        }
      }
      allNodeAccessories {
        edges {
          node {
            id
            title

          }
        }
      }
      allNodeCompany  {
        edges {
          node {
            id
            title
          }
        }
      }
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
  const { allNodeWoodWoodClad, allNodeUpvc, allNodeSteelCustom, allNodeShadingProducts, allNodeAccessories, allNodeCompany, allNodeBlog, allNodeWindows } = res.data
  allNodeBlog.edges.forEach(({ node }) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${node.fields.slug}`,
      context: {
        slug: node.fields.slug
      }
    })
  })
}


