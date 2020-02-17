import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'



const Materials = () => {

  const data = useStaticQuery(graphql`
    query {
    allNodeMaterials {
      edges {
        node {
        title
          fields {
            slug
        }
        relationships {
          field_materials_images {
            localFile {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 240) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
}
  materialBasicPage: nodePage(id: { eq: "bbdf6723-50cf-5efd-aebd-35e11c82fa70" }) {
    title
    body {
      value
    }
    relationships {
      field_basic_page_image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 6400, maxHeight: 2000) {
             ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`)
  console.log(data.allNodeMaterials, 'this is the data')
  const materialBasicImage = data.materialBasicPage.relationships.field_basic_page_image[0].localFile.childImageSharp.fluid
  return (
    <div>
      <Layout>
        <Hero>
          <Img fluid={materialBasicImage} />
          <h1>Our Materials</h1>
          <p dangerouslySetInnerHTML={{ __html: data.materialBasicPage.body.value }}></p>
        </Hero>

        <FlexContainer>
          {data.allNodeMaterials.edges.map((edge) => {
            const images = edge.node.relationships.field_materials_images[0].localFile.childImageSharp.fluid
            return (
              <li>
                <Link to={`/materials/${edge.node.fields.slug}`}>
                  <h1>{edge.node.title}</h1>
                  {images ? (
                    <div>
                      <SetImg fluid={images} />
                    </div>
                  ) :
                    <div><p>Image not available</p> </div>
                  }
                </Link>
              </li>
            )
          })}
        </FlexContainer>
      </Layout>
    </div>
  )
}



const Hero = styled.div`
        position: relative;
        display: inline-block;
        text-align: center;
        padding: 120px 0 60px 0;
       
    
    h1 {
      display: block;
      position: absolute;
      z-index: 1;
      width:100%; 
      height:0;
      font-size: 25px; line-height: 0;
      color:white;
      position:absolute; top:50%;
      text-align: center;
  
      }

      h3 {
        padding: 30px 0 0 0;
        width: 1090px;
      }

      p {
        text-align: center;
        padding: 30px 0 0 0;
        font-weight: 30;
      }
  
  `

const FlexContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
h1 {
  margin-top: 19px;
  font-size: 18px;
  text-align: center;
}

li {
  list-style-type: none;
   a {
    text-decoration: none;
    color: #000;
   }
}

`
const SetImg = styled(Img)`
  display: block !important;
  margin: 0 auto;
  flex-grow: 1;
  width: 320px;
`





export default Materials 