import React from "react"
import styled from "styled-components"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"

const WindowContent = () => {
  const data = useStaticQuery(graphql`
    query {
      nodePage(id: { eq: "1b8f85d9-161a-56c4-8312-3e812d9d88e5" }) {
        id
        title
        body {
          value
        }
        relationships {
          field_basic_page_image {
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
      windowImages: nodeWindows(
        id: { eq: "0466764b-6052-53ef-ae08-badaf6835b50" }
      ) {
        id
        title
        relationships {
          field_images {
            localFile {
              childImageSharp {
                fluid(maxWidth: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  console.log(" double queries ", data)
  const image =
    data.nodePage.relationships.field_basic_page_image[0].localFile
      .childImageSharp.fluid

  const title = data.nodePage.title
  const body = data.nodePage.body.value

  return (
    <>
      <Container>
        <Img style={{ width: "50%" }} fluid={image} />

        <HalfTwo>
          <h1>{title}</h1>

          <p dangerouslySetInnerHTML={{ __html: body }}></p>
        </HalfTwo>
      </Container>
      <Link to={"/"}>
        <Btn>Learn More</Btn>
      </Link>
      <FlexContainer>
        {data.windowImages.relationships.field_images.map(item => {
          const previewWindowImages = item.localFile.childImageSharp.fluid
          return <SetImg fluid={previewWindowImages} />
        })}
      </FlexContainer>
    </>
  )
}

const Container = styled.div`
  background: #f5f5f5;
  display: flex;
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
  padding: 25px 39px;
  font-weight: 700;
`

const FlexContainer = styled.div`
  display: flex;
`
const SetImg = styled(Img)`
  display: block !important;
  margin: 0 auto;
  flex-grow: 1;
  width: 190px;
`

export default WindowContent
