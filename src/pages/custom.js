import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

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
                    fluid(maxWidth: 420, maxHeight: 240) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
      customBasicPage: nodePage(
        id: { eq: "623fad50-6b1f-588c-876c-cbb568b8d60d" }
      ) {
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
  const basicPageImage =
    data.customBasicPage.relationships.field_basic_page_image[0].localFile
      .childImageSharp.fluid
  const title = data.customBasicPage.title
  const body = data.customBasicPage.body.value

  return (
    <div>
      <Layout>
        <Img fluid={basicPageImage} />
        <h1>{title}</h1>

        <div>
          <p dangerouslySetInnerHTML={{ __html: body }}></p>
        </div>

        <FlexContainer>
          {data.allNodeCustom.edges.map(edge => {
            const customTitle = edge.node.title
            const customImage =
              edge.node.relationships.field_custom_image[0].localFile
                .childImageSharp.fluid
            const customBody = edge.node.body.value
            console.log(edge, 'data')
            return (
              <div>
                <ul>
                  <li>
                    <Link to={`/custom/${edge.node.fields.slug}`}>
                      {!customBody || !customImage ? (
                        <div>
                          <h1>{customTitle}</h1>
                          <p>There are images and bpdy</p>
                          <SetImg fluid={customImage} />
                        </div>
                      ) : (
                        <div>
                          <h1>{customTitle}</h1>
                          <SetImg fluid={customImage} />
                        </div>
                      )}
                    </Link>
                  </li>
                </ul>
              </div>
            )
          })}
        </FlexContainer>
      </Layout>
    </div>
  )
}

const FlexContainer = styled.ul`
  padding: 0.6rem;
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 60px auto;

  h1 {
    font-size: 18px;
  }

  li {
    margin: 1rem;

    list-style-type: none;
    text-align: center;
    font-weight: 30;
    a {
      text-decoration: none;
      color: #000;
    }
  }
`
const SetImg = styled(Img)`
  display: block !important;
  margin: 6px;
  flex-grow: 1;
  width: 330px;
  border-radius: 2%;
`

export default Custom
