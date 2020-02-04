import React from "react"
import styled from "styled-components"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"

const WindowContent = () => {
  const data = useStaticQuery(graphql`
    query {
      nodeWindows(id: { eq: "202c9211-14e9-5e74-8657-8cd74b76f845" }) {
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
        <Link to={"/"}>
          <Btn>Learn More</Btn>
        </Link>
      </HalfTwo>
    </Container>
  )
}

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
    padding-top: 25px;
  }
`

const Btn = styled.button`
  display: flex;
  color: #2d395b;
  margin: 0 auto;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  /* border: 1px solid red; */
  padding: 17px 39px;
  font-weight: 700;
`

export default WindowContent
