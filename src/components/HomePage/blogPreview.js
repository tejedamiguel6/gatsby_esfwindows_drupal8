import React from 'react'
import Img from 'gatsby-image'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const BlogPreview = () => {
  const data = useStaticQuery(graphql`
    query {
      nodePage(id: { eq: "a343090d-aa5f-59a7-b1ec-7f31ad3a4093" }) {
        id
        title
        relationships {
          field_basic_page_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 370) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)

  const blogImage =
    data.nodePage.relationships.field_basic_page_image[0].localFile
      .childImageSharp.fluid

  console.log(blogImage)

  return (
    <Container>
      <BlogContainer>
        <Img style={{ width: '100%' }} fluid={blogImage} />
        <h3>
          <StyledLink to={`/blog`}>{data.nodePage.title}</StyledLink>
        </h3>
      </BlogContainer>

      <RightSide>
        <h3>text should be in the middle</h3>
      </RightSide>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  /* border: 2px solid red; */
  margin-top: 6rem;
  max-width: 1679px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2d385b;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ffff;

  @media (max-width: 899px) {
    margin-bottom: 40px;
  }

  &:hover {
    background-color: transparent;
    color: white;
  }
`

const BlogContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid blue;
  width: 50%;

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    bottom: 110px;
  }
`

const RightSide = styled.div`
  border: 1px solid red;
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default BlogPreview
