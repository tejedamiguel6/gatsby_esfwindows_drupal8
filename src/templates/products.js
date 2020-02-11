import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Img from "gatsby-image"



export const query = graphql`
query($slug: String!) {
  nodeProducts(fields: { slug: { eq: $slug } }) {
    title
    relationships {
      field_products_images {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1008, maxHeight: 108 ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}`


const Product = ({ data }) => {
    console.log(data, 'products template ')
    const image = data.nodeProducts.relationships.field_products_images[0].localFile.childImageSharp.fluid
    console.log(image)
    return (
        <Layout>
            <Img
                fluid={image}
            />

            <h3>Dynamic content from Drupal here</h3>



        </Layout>

    )
}

export default Product