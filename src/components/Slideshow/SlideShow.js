import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const SlideShow = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeHomeSlideshow {
        edges {
          node {
            title
            relationships {
              field_slide_show_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1270, maxHeight: 620) {
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
  `)
  return (
    <div>
      <Carousel autoPlay showThumbs={false} infiniteLoop={true}>
        {data.allNodeHomeSlideshow.edges.map(edge => {
          const images =
            edge.node.relationships.field_slide_show_image[0].localFile
              .childImageSharp.fluid
          const title = edge.node.title
          return (
            <>
              <Img fluid={images} alt={title} />
            </>
          )
        })}
      </Carousel>
    </div>
  )
}

export default SlideShow
