import React from 'react'
import { useStaticQuery, graphl } from 'gatsby'
import Img from 'gatsby-image'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'


const SlideShow = () => {
  const data = useStaticQuery(graphql`
query {
    allNodeHomeSlideshow {
    edges {
      node {
        relationships {
          field_slide_show_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1270, maxHeight: 740) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
}`)
  return (
    <div>
      <Carousel
        autoPlay
        showThumbs={false}
        infiniteLoop={true}
      >
        {data.allNodeHomeSlideshow.edges.map((edge) => {
          const images = edge.node.relationships.field_slide_show_image[0].localFile.childImageSharp.fluid
          return (
            <>
              <Img fluid={images} />
            </>
          )
        })}
      </Carousel>
    </div>
  )
}


export default SlideShow