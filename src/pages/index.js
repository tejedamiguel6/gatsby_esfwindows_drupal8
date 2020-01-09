import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Head from '../components/Head'
import Img from 'gatsby-image'


const Hero = styled.div`
    /* border: 1px solid red; */


`


const Title = styled.h1`
    text-align: center;
    font-weight: 10;
    font-family: 'Times New Roman', Times, serif;
`

export const query = graphql`
    query {
    nodePage(title: { eq: "Home" }) {
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
                    fluid(maxWidth: 990, maxHeight: 400) {
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
    console.log(post)

    return (
        <Layout>
            <Head title='Home' />
            <Hero>
                <div>
                    <Title>Welcome to ESF Windows</Title>
                {/* <h1>{post.title}</h1> */}
                    <Img style={{
                        marginTop: '60px',
                        backgroundSize: 'cover',
                        left: 0,
                        top: 0,
                        width: '100%',

                    }}
                    fluid={post.relationships.field_basic_page_image[0].relationships.node__page[0].relationships.field_basic_page_image[0].localFile.childImageSharp.fluid} />

                </div>

                <div>
                   <div dangerouslySetInnerHTML={{__html: post.body[0].value}}></div>
                </div>
            </Hero>
            
            
        </Layout>
    )
    
}




export default Home