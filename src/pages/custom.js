import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'

const Custom = () => {

  const data = useStaticQuery(graphql`
    query {
  allNodeCustom {
    edges {
      node {
        id
        title
        body {
          value
        }
        fields {
          slug
        }
        relationships {
          field_custom_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 920, maxHeight: 840) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
  customBasicPage: nodePage(id: { eq: "623fad50-6b1f-588c-876c-cbb568b8d60d" }) {
    title
    body {
      value
    }
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
`)
  console.log(data, '*****')
  const basicPageImage = data.customBasicPage.relationships.field_basic_page_image[0].localFile.childImageSharp.fluid
  const title = data.customBasicPage.title
  const body = data.customBasicPage.body.value
  console.log(body)
  return (
    <div>
      <Layout>
        <Img fluid={basicPageImage} />
        <h1>{title}</h1>

        <div>
          <p dangerouslySetInnerHTML={{ __html: body }}></p>


        </div>

        <div>
          {data.allNodeCustom.edges.map((edge) => {
            const customImage = edge.node.relationships.field_custom_image[0].localFile.childImageSharp.fluid
            console.log(customImage)
            return (
              <div>
                <ul>
                  <li>
                    <Link to={`/custom/${edge.node.fields.slug}`}>
                      {edge.node.title}
                    </Link>

                  </li>

                </ul>

              </div>
            )
          })}
        </div>



      </Layout>

    </div >
  )
}

export default Custom