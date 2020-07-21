import React from "react";
import Img from "gatsby-image";
import { graphql, Link, useStaticQuery } from "gatsby";
import styled from "styled-components";

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
                fluid(maxWidth: 600, maxHeight: 380) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const blogImage =
    data.nodePage.relationships.field_basic_page_image[0].localFile
      .childImageSharp.fluid;

  console.log(blogImage);

  return (
    <Container>
      <BlogContainer>
        <Img
          fluid={blogImage}
          title={data.nodePage.title}
          alt={data.nodePage.title}
        />{" "}
        <ButtonCenteredFlex>
          <StyledLink to={`/blog`}> {data.nodePage.title} </StyledLink>{" "}
        </ButtonCenteredFlex>{" "}
      </BlogContainer>{" "}
      <RightSide> {/* <h3>filler text/image for later</h3> */} </RightSide>{" "}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 6rem;
  max-width: 1679px;
`;

const BlogContainer = styled.div`
  width: 50%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2d385b;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: transparent;
    color: grey;
  }

  @media (max-width: 900px) {
    margin-top: 10px;
    border-bottom: 2px solid #2d385b;
    position: relative;
    top: 80px;
    font-size: 18px;
    padding: 5px;
    border-radius: 0px;
  }
`;

const ButtonCenteredFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -80px;
`;

const RightSide = styled.div`
  /* border: 1px solid red; */
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default BlogPreview;
