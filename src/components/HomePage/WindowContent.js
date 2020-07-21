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
                fluid(maxWidth: 900, maxHeight: 520) {
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
        <SetImg fluid={image} alt={title} />
        <Top>
          <h1>{title}</h1>
          <p dangerouslySetInnerHTML={{ __html: body }}></p>
          <ButtonCenteredFlex>
            <StyledLink to={`/products/${data.windowLink.fields.slug}`}>
              Learn More
            </StyledLink>
          </ButtonCenteredFlex>
        </Top>
      </Container>
    </>
  )
}

const SetImg = styled(Img)`
  @media (min-width: 900px) {
    display: flex;
    flex-direction: column-reverse;
    width: 90%;
  }
`

const Container = styled.div`
  background: #f5f5f5;
  display: flex;
  border-top: 1px solid #274f8d;

  @media (max-width: 899px) {
    display: flex;
    flex-direction: column;
  }
`

const Top = styled.div`
  margin: 4rem 20px 0 20px;
  width: 35%;
  /* width: auto; */

  @media (max-width: 899px) {
    width: auto;
  }

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

const ButtonCenteredFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledLink = styled(Link)`
  margin-top: 50px;
  text-decoration: none;
  color: #2d385b;
  font-weight: bold;
  text-transform: uppercase;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #ffff;

  @media (max-width: 899px) {
    margin-bottom: 40px;
  }

  @media (max-width: 1300px) {
    margin-bottom: 2rem;
  }

  &:hover {
    background-color: #274f8d;
    color: white;
  }
`

// const SetImg = styled(Img)`
//   display: block !important;
//   margin: 0 auto;
//   flex-grow: 1;
//   width: 190px;
// `

export default WindowContent
