import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql } from 'gatsby'


export const query = graphql`
query($slug: String!) {
  nodeProducts(fields: { slug: { eq: $slug } }) {
    title
    relationships {
      field_products_images {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1008, maxHeight: 708 ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}`




const Materials = () => {
  return (
    <div>
      <Layout>
        <h1>Materials template is here</h1>
      </Layout>

    </div>
  )
}


export default Materials 