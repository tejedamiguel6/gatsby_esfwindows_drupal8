// import React from 'react'
// import { graphql, useStaticQuery, Link } from 'gatsby'
// import styled from 'styled-components'

// const SelectBlogMonth = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allNodeBlog {
//         edges {
//           node {
//             field_year
//             created(formatString: "MMMM")
//             id
//             title
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   // console.log(months, 'here is th month')
//   return (
//     <SideBar>
//       {data.allNodeBlog.edges.map(edge => {
//         // console.log(edge, '@@@')
//         const month = edge.node.created
//         return (
//           <div>
//             <Link to={`/blog/${edge.node.fields.slug}`}>
//               <ul>{/* <li>{month}</li> */}</ul>
//             </Link>
//           </div>
//         )
//       })}
//       {/* <h1>this will show the month of the year and render blogs</h1> */}
//     </SideBar>
//   )
// }

// const SideBar = styled.div`
//   padding-top: 7rem;
// `
// export default SelectBlogMonth

// // const monthSelected = [
// //   'January',
// //   'February',
// //   'March',
// //   'April',
// //   'May',
// //   'June',
// //   'July',
// //   'August',
// //   'September',
// //   'October',
// //   'November',
// //   'December',
// // ]
