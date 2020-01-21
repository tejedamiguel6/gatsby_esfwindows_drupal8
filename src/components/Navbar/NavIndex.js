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

