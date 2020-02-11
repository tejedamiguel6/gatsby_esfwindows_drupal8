// import React from 'react'
// import { graphql, useStaticQuery , Link } from 'gatsby'




// // make menu from drupal dynamic on the frontend
// const NavIndex = ( ) => {
//     const data = useStaticQuery(graphql`
//         query {
//         allMenuLinkContentMenuLinkContent(
//         sort: { fields: [weight], order: DESC }
//         filter: { menu_name: { eq: "main" } }
//     ){
//     edges {
//       node {
//           title
//         fields {
//           lowerCaseMenuTitle
//         }
//       }
//     }
//   }
// }

// `)
// console.log('here is navINdex data',  (data))

//     return (
//         <div>
//         {data.allMenuLinkContentMenuLinkContent.edges.map((edge) => (
//             <Link to={`${edge.node.fields.lowerCaseMenuTitle}`}>{edge.node.title}</Link>
//         )) }
        
//         </div>
//     )
// }


// export default NavIndex

