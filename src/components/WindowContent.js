import React from 'react'
import styled from 'styled-components'
<<<<<<< HEAD
import { useStaticQuery, Link, graphql } from 'gatsby'
import Img from 'gatsby-image'




const Container = styled.div`
    background: #F5F5F5;
    display: flex;
    justify-content: space-between;

=======
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const Container = styled.div`
    background: #F5F5F5;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
`

const HalfTwo = styled.div`
    margin: 15px;
    width: 50%;

<<<<<<< HEAD
        h1 {
            /* border: 1px solid red; */
            text-align: center;
            margin-top: 39px;
        }

        p {
            text-align: center;
            padding-top: 50px;

        }


`

const WindowContent = () => {

    const data = useStaticQuery(graphql`
        query {
        nodeWindows(id: { eq: "73f4d284-0e26-5c1e-8b5b-3c6b2ccff1fc" }) {
        id
        title
        body {
        value
        }
    relationships {
      field_images {
        localFile {
          childImageSharp {
            fluid(maxWidth: 900, maxHeight: 640) {
              ...GatsbyImageSharpFluid
=======
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
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
            }
          }
        }
      }
    }
  }
<<<<<<< HEAD
}

`);
console.log('window content ', data)
const image = data.nodeWindows.relationships.field_images.localFile.childImageSharp.fluid
const title = data.nodeWindows.title
const body = data.nodeWindows.body.value

console.log(image)
    return (
        <Container>
            <Img 
                style={{width: '50%' }}
                fluid={image} />

                <HalfTwo>
                    <h1>{title}</h1>

                    <p dangerouslySetInnerHTML={{__html: body}}></p>
                
                
                </HalfTwo>
        </Container>
=======
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
       
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
    )
}

export default WindowContent