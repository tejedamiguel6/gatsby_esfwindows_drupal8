import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Container, AccessoriesStyle } from "../components/styles/accessories"
export const query = graphql`
  query($slug: String!) {
    nodeAccessories(fields: { slug: { eq: $slug } }) {
      title
      body {
        value
      }
      relationships {
        field_accessories_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const Accessories = ({ data }) => {
  const title = data.nodeAccessories.title
  const body = data.nodeAccessories.body.value
  const image = data.nodeAccessories.relationships.field_accessories_image[0].localFile.childImageSharp.fluid


  console.log(image, '999999!!')
  return (
    <Layout>
      <Container>
        <h1>{title}</h1>

        {image && body ? (
          <div>
            <h1>{title}</h1>

            <AccessoriesStyle>
              <p dangerouslySetInnerHTML={{ __html: body }}></p>
            </AccessoriesStyle>


          </div>
        ) :
          <div>
            <p dangerouslySetInnerHTML={{ __html: body }}></p>


          </div>}


      </Container>
    </Layout>
  )
}

export default Accessories
