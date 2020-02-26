import React from "react"
import styled from "styled-components"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"

const Container = styled.div`
  background: #f5f5f5;
  display: flex;
  justify-content: space-between;
`
const HalfTwo = styled.div`
  margin: 15px;
  width: 50%;

  h1 {
    /* border: 1px solid red; */
    text-align: center;
    margin-top: 39px;
  }

  p {
    text-align: center;
    padding-top: 50px;
  }
`

const WindowContent = () => {
  const data = useStaticQuery(graphql`
    query {
      nodeWindows(id: { eq: "73f4d284-0e26-5c1e-8b5b-3c6b2ccff1fc" }) {
        id
        title
        body {
          value
        }
        relationships {
          field_images {
            localFile {
              childImageSharp {
                fluid(maxWidth: 900, maxHeight: 640) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const image =
    data.nodeWindows.relationships.field_images.localFile.childImageSharp.fluid
  const title = data.nodeWindows.title
  const body = data.nodeWindows.body.value

  return (
    <Container>
      <Img style={{ width: "50%" }} fluid={image} />

      <HalfTwo>
        <h1>{title}</h1>

        <p dangerouslySetInnerHTML={{ __html: body }}></p>
      </HalfTwo>
    </Container>
  )
}

export default WindowContent
