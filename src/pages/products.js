import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Layout from "../components/HomePage/Layout"
import styled from 'styled-components'
import Img from 'gatsby-image'


const Product = () => {
  const data = useStaticQuery(graphql`
    query {
    allNodeProducts {
    edges {
      node {
        title
        body {
            value
        }
        fields {
          slug
        }
        relationships {
          field_products_images {
            localFile {
              childImageSharp {
                fixed(width: 400, height: 240) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
  productBasicPage: nodePage(id: { eq: "92f28578-015b-5d98-b057-6bb066b3a04a" }) {
    title
    body {
      value
    }
    relationships {
      field_basic_page_image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 6700, maxHeight: 2000) {
             ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`)
  const productBasicImage = data.productBasicPage.relationships.field_basic_page_image[0].localFile.childImageSharp.fluid

  return (
    <Layout>
      <Hero>
        <h1>{data.productBasicPage.title}</h1>
        <Img fluid={productBasicImage} />
        <p dangerouslySetInnerHTML={{ __html: data.productBasicPage.body.value }}></p>

      </Hero>
      <Products>
        {data.allNodeProducts.edges.map((edge) => {
          const productImages = edge.node.relationships.field_products_images[0].localFile.childImageSharp.fixed
          return (
            <li>
              <Link to={`/products/${edge.node.fields.slug}`}>
                <h1>{edge.node.title}</h1>

                <Img fixed={productImages} />
              </Link>


            </li>
          )
        })}
      </Products>
    </Layout>
  )
}


// styled components
const Products = styled.ol`
      display: flex;
      justify-content: space-around;
      flex-flow: wrap;
      margin: 180px;

    li {
      
      list-style-type: none;
    }
    h1 {
      font-size: 20px;
      text-align: center;
    }
`



const Hero = styled.div`
    position: relative;
    display: inline-block;
    text-align: center;
    padding-top: 120px;

    h1 {
    display: block;
    position: absolute;
    z-index: 1;
    width:100%; height:0;
    font-size: 25px; line-height: 0;
    color:white;
    position:absolute; top:50%;
      text-align: center;

    }

`

export default Product