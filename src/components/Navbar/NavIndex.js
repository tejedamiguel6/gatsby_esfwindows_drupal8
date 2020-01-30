<<<<<<< HEAD
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

function NavIndex() {
  const data = useStaticQuery(graphql`
    query {
      allMenuLinkContentMenuLinkContent(
        filter: {
          drupal_parent_menu_item: {
            eq: "menu_link_content:be7894ec-d78d-488c-82a2-379c3db8ed6c"
          }
        }
      ) {
        edges {
          node {
            id
            title
            drupal_parent_menu_item
          }
        }
      }
    }
  `)

  return (
    <div>
      {/* {data.allMenuLinkContentMenuLinkContent.edges.map((edge) => (
                // <p>{edge.node.fields.lowerCaseMenuTitle}</p>
            <Link to={edge.node.fields.lowerCaseMenuTitle}> {edge.node.title}</Link>
                
            ))} */}
    </div>
  )
}

export default NavIndex
=======
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'



const NavIndex = () => {


    const data = useStaticQuery(graphql`
        query {
  allMenuLinkContentMenuLinkContent(
    sort: { fields: [weight], order: ASC }
    filter: { menu_name: { eq: "main" } }
    ) {
        edges {
        node {
            id
            drupal_id
            title
            link {
            uri
            title
                }
            expanded
            changed
            weight
            menu_name
            drupal_parent_menu_item
            link {
            uri
            title
        }
      }
    }
  }
}
`)

console.log('this data is from the NavIndex', data)

    return (
        <div>
           <p> Nav from drupal
                delete this when its you see that it's working
            </p>
        
        
        </div>
    )
}


export default NavIndex

>>>>>>> 99686ba17ec836a534757918cd0ed2c2a126fa56
