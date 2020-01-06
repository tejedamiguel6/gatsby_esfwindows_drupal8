import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


// export const query = graphql`
// query($slug: String!) {
//   markdownRemark(fields: { slug: { eq: $slug } }) {
//     frontmatter {
//       title
//       date
//     }
//     html
//   }
// }
// `






const Blog = (props) => {
    return (
        <Layout>
          <h1>Blog template page</h1>
            
        </Layout>


    )
}

export default Blog