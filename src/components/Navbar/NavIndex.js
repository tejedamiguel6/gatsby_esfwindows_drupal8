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
