import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { graphql, Link, useStaticQuery } from "gatsby"

const Company = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeCompany {
        edges {
          node {
            id
            title
            body {
              value
            }
            relationships {
              field_company {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1575, maxHeight: 740) {
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
      <Layout>
        {data.allNodeCompany.edges.map(edge => {
          console.log(edge, "^66666^^^^")
          const image =
            edge.node.relationships.field_company[0].localFile.childImageSharp
              .fluid
          const body = edge.node.body.value

          console.log(edge)
          return (
            <div className="zoom">
              <Img fluid={image} />
              <h1>{edge.node.title}</h1>
              <p dangerouslySetInnerHTML={{ __html: body }}></p>
            </div>
          )
        })}
      </Layout>
    </div>
  )

  // styled components
}

export default Company
