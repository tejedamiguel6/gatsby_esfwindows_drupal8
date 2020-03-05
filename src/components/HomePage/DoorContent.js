import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

import Img from 'gatsby-image'

const DoorContent = () => {
  const data = useStaticQuery(graphql`
    query {
      nodePage(id: { eq: "74aebf1e-5b6f-56e7-8bec-54951961cca4" }) {
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
      # this is here just to link you to the door page
      doorLink: nodeProducts(
        id: { eq: "311a37bf-a733-586b-a3ac-160b9e7842a6" }
      ) {
        id
        title
        fields {
          slug
        }
      }
    }
  `)
  const { title } = data.nodePage
  const body = data.nodePage.body.value

  const image =
    data.nodePage.relationships.field_basic_page_image[0].localFile
      .childImageSharp.fluid

  return (
    <ContainerPadding>
      <Container>
        <HalfTwo>
          <h1>{title}</h1>
          <p dangerouslySetInnerHTML={{ __html: body }}></p>
          <Link to={`products/${data.doorLink.fields.slug}`}>
            <Btn>Learn More</Btn>
          </Link>
        </HalfTwo>
        <Img style={{ width: '50%' }} fluid={image} />
      </Container>
    </ContainerPadding>
  )
}

const ContainerPadding = styled.div`
  padding-top: 90px;
`

const Container = styled.div`
  background: #f5f5f5;
  display: flex;
  justify-content: space-between;
`

const HalfTwo = styled.div`
  margin: 15px;
  width: 50%;

  h1 {
    text-align: center;
    margin-top: 39px;
  }

  p {
    text-align: center;
    padding-top: 30px;
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

export default DoorContent
