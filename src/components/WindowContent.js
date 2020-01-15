import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const Container = styled.div`
    background: #F5F5F5;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
`

const HalfTwo = styled.div`
    margin: 15px;
    width: 50%;

        p {
            text-align: center;
            padding-top: 50px;
        }
`


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
        relationships {
          node__windows {
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
      }
    }
  }
}`)

 console.log('here is the window content data ', data)
 const image = data.nodeWindows.relationships.field_images.relationships.node__windows[0].relationships.field_images.localFile.childImageSharp.fluid
 const body = data.nodeWindows.body.value
 console.log(image)
    return (
        <Container>
         <Img 
            style={{width: '50%'}}
            fluid={image} />
            <HalfTwo>
                <p dangerouslySetInnerHTML={{ __html: body}}></p>
            </HalfTwo>

        </Container>
       
    )
}

export default WindowContent