import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql } from 'gatsby'


export const query = graphql`
query($slug: String!) {
  nodeCustom(fields: { slug: { eq: $slug } }) {
    title
    body {
      value
    }
    relationships {
      field_custom_image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 700) {
              base64
            }
          }
        }
      }
    }
  }
}`



const Custom = () => {
    return (
        <div>
            <Layout>

                Custom template
            </Layout>

        </div>
    )
}

export default Custom