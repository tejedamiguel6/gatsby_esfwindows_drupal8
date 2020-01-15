import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Company from '../components/Company'
import WindowContent from '../components/WindowContent'
import styled from 'styled-components'
import Head from '../components/Head'
import Img from 'gatsby-image'



export const query = graphql`
    query {
    nodePage(title: { eq: "ESF Windows" }) {
    title
    body {
      value
    }
    relationships {
      field_basic_page_image {
        relationships {
          node__page {
            relationships {
              field_basic_page_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1080, maxHeight: 900) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;




const Home = ({ data }) => {
    const post = data.nodePage
    // console.log('this is the first page ', post)

    return (
        <Layout>
            <Head title='Home' />
            <Hero>
              <Img style={{
                  marginTop: '-30px',
              }}
              fluid={post.relationships.field_basic_page_image[0].relationships.node__page[0].relationships.field_basic_page_image[0].localFile.childImageSharp.fluid} />
              <Title>{post.title}</Title>
                <Quote dangerouslySetInnerHTML={{__html: post.body.value}}></Quote>
            </Hero>
              <Company />
              <WindowContent />  
        </Layout>
    )  
}


// style components
const Hero = styled.div`
    /* border: 1px solid red; */
    padding-top: 110px;
    position: relative;

`

const Body = styled.div`
  text-align: center;
  font-size: 20px;
  color: #7f7f7f;
  padding-top: 70px;
`


const Title = styled.h1`
    position: absolute;
    color: #FFFFFF;
    margin: 0 auto;
    left: 20%;
    top: 30%;
    text-align: center;
    padding-top: 66px;
    font-weight: 10;
    font-size: 70px;
    font-family: 'Times New Roman', Times, serif;
      @media(max-width: 500px ) {
        font-size: 50px;
        
      }
      
     
`

const Quote = styled.h3`
  position: absolute;
  top: 45%;
  left: 20%;
  width: 65%;
  font-size: 50px;
  @media(max-width: 1090px) {
    font-size: 30px;
    width: 70%;
    padding-top: 30px;
  }
  @media(max-width: 800px ) {
        font-size: 40px;
      }


`







export default Home