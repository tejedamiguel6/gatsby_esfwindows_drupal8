import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

const WindowContent = () => {
  const data = useStaticQuery(graphql`
    query {
      nodePage(id: { eq: "095e9651-03b2-5a65-a2ef-3eac868e4219" }) {
        id
        title
        body {
          value
        }
        relationships {
          field_basic_page_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 900, maxHeight: 590) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      windowImages: nodePage(
        id: { eq: "4df8f546-3489-5785-9761-d1d8fcbd3004" }
      ) {
        id
        title
        relationships {
          field_basic_page_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      # this is query links you to the windows page
      windowLink: nodeProducts(
        id: { eq: "fd84c217-3940-52d0-940e-ccf456a4b887" }
      ) {
        id
        title
        fields {
          slug
        }
      }
    }
  `)

  const image =
    data.nodePage.relationships.field_basic_page_image[0].localFile
      .childImageSharp.fluid
  const title = data.nodePage.title
  const body = data.nodePage.body.value
  return (
    <>
      <Container>
        <Img style={{ width: '50%' }} fluid={image} />
        <Top>
          <h1>{title}</h1>
          <p dangerouslySetInnerHTML={{ __html: body }}></p>
          {/* <Bottom>
            <h1>About us</h1>
          </Bottom> */}

          <Link to={`/products/${data.windowLink.fields.slug}`}>
            <Btn>Learn More</Btn>
          </Link>
        </Top>
      </Container>

      <FlexContainer>
        {data.windowImages.relationships.field_basic_page_image.map(item => {
          console.log(item, 'PPPp')
          const previewWindowImages = item.localFile.childImageSharp.fluid
          return <SetImg fluid={previewWindowImages} />
        })}
      </FlexContainer>
    </>
  )
}

const Container = styled.div`
  /* border: 2px solid green; */
  background: #f5f5f5;
  display: flex;

  /* @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    max-width: 700px;

    img {
      border: 1px solid red;
      width: 700px !important;
    }
  } */
`

const Top = styled.div`
  /* height: 17rem; */
  /* border: 1px solid blue; */
  margin: 0.5rem;
  width: 50%;

  h1 {
    /* border: 1px solid red; */
    text-align: center;
    margin-top: 30px;
  }

  p {
    text-align: center;
    padding-top: 25px;
  }
`

// const Bottom = styled.div`
//   border: 1px solid green;
//   height: 13rem;
//   margin: 6rem 0 0 0;
// `

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
