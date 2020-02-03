// import React from 'react'
// import { Link, graphql, useStaticQuery } from 'gatsby'
// import styled from 'styled-components'





// const NavSubmenu = styled.ul`
//     display: none;

// `

// const SubMenuItem = styled.li`
//     &:Hover {
//         color: red;

//     }
// `




// class SubMenuWindows extends React.Component {
//     render (){
//         return (
//             <ul>
//                 <li>
//                     <a>Our Company</a>
//                 </li>
//                 <li>
//                     <a>Our Team</a>
//                 </li>

//                 <li>
//                     <a>Our Portfolio</a>
//                 </li>
            
//             </ul>
//         )
//     }
// }








// const SubMenu = () => {
//    const data = useStaticQuery(graphql`
//    query {
//   allMenuLinkContentMenuLinkContent(
//     filter: {
//       drupal_parent_menu_item: {
//         eq: "menu_link_content:4b7750d8-0c73-47e5-897c-126cf1f33aa1"
//       }
//     }
//   ) {
//     edges {
//       node {
//         drupal_parent_menu_item
//         title
//         fields {
//           lowerCaseMenuTitle
//         }
//       }
//     }
//   }
// }
// `)

// console.log('Submenu data ---> ', data)
//     return(
//         <div>
//         {data.allMenuLinkContentMenuLinkContent.edges.map((edge) => (
//             <p>
//                 {edge.node.title}
//             </p>
//         ))}
        
//             sub menu here
//         </div>
//     )
// }


// export default SubMenu 