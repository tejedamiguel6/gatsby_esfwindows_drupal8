import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
<<<<<<< HEAD
=======
import Company from '../components/Company'
import WindowContent from '../components/WindowContent'
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
import styled from 'styled-components'
import Head from '../components/Head'
import Img from 'gatsby-image'

<<<<<<< HEAD
import CompanyContent from '../components/CompanyContent'
import WindowContent from '../components/WindowContent'

import NavIndex from '../components/Navbar/NavIndex'




export const query = graphql`
query {
  nodePage(id: { eq: "096c6f24-2c9d-5534-b8f9-0ed68a782b9e" }) {
=======


export const query = graphql`
    query {
    nodePage(title: { eq: "ESF Windows" }) {
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
    title
    body {
      value
    }
    relationships {
      field_basic_page_image {
<<<<<<< HEAD
        localFile {
          childImageSharp {
            fluid(maxWidth: 1080, maxHeight: 450) {
              ...GatsbyImageSharpFluid
=======
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
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
            }
          }
        }
      }
    }
  }
}
`;


<<<<<<< HEAD
const Home = ({ data }) => {
  const image = data.nodePage.relationships.field_basic_page_image[0].localFile.childImageSharp.fluid
  const title = data.nodePage.title
  const quote = data.nodePage.body.value
  
=======


const Home = ({ data }) => {
    const post = data.nodePage
    // console.log('this is the first page ', post)

>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
    return (
        <Layout>
            <Head title='Home' />
            <Hero>
<<<<<<< HEAD
              <Img style={{marginTop: '-22px'}}
                fluid={image} />
            
            <Title>
              {title}
            </Title>
            <Quote dangerouslySetInnerHTML={{__html: quote }}></Quote> 
            </Hero> 
            <CompanyContent />
            <WindowContent />

            <NavIndex />
            
        </Layout>
    )
    
}



=======
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
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
const Hero = styled.div`
    /* border: 1px solid red; */
    padding-top: 110px;
    position: relative;

<<<<<<< HEAD

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
  font-family: 'Times New Roman, Times, Serif';
    @media(max-width: 500px) {
      font-size: 50px;
    }
=======
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
      
     
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
`

const Quote = styled.h3`
  position: absolute;
  top: 45%;
  left: 20%;
  width: 65%;
  font-size: 50px;
<<<<<<< HEAD
  @media(max-width: 1680px) {
    margin-top: 30px;
    font-size: 60px;
    width: 60%;
    padding-top: 30px;
  }
  @media(max-width: 1150px) {
    font-size: 50px;
    margin-top: 25px;
    width: 50%;
    
  }
  @media(max-width: 1250px) {
    display: none;
    font-size: 40px;
    margin-top: 25px;
    width: 50%;
  }
  
`

=======
  @media(max-width: 1090px) {
    font-size: 30px;
    width: 70%;
    padding-top: 30px;
  }
  @media(max-width: 800px ) {
        font-size: 40px;
      }


`







>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
export default Home