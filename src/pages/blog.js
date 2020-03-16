import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/HomePage/Layout'
import styled from 'styled-components'
import Head from '../components/HomePage/Head'
import Img from 'gatsby-image'

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeBlog {
        edges {
          node {
            created(formatString: "MMMM, Do, YYYY")
            id
            relationships {
              field_blog_image {
                localFile {
                  childImageSharp {
                    fixed(width: 530, height: 230) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
            title
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  console.log(data.allNodeBlog, 'dates here')
  return (
    <Layout>
      <Head title="Blog" />
      sp
      <BlogPost>
        {data.allNodeBlog.edges.map(edge => {
          const date = edge.node.created
          console.log(edge, 'BLOG PAGE DATA')
          const blogImage =
            edge.node.relationships.field_blog_image[0].localFile
              .childImageSharp.fixed

          return (
            <li>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <Img fixed={blogImage} />
                <h2>{edge.node.title}</h2>
                <p>{edge.node.date}</p>
                <p>{date}</p>
              </Link>
            </li>
          )
        })}
      </BlogPost>
    </Layout>
  )
}

const BlogPost = styled.ol`
  display: flex;
  justify-content: space-evenly;
  flex-flow: wrap;
  list-style-type: none;
  padding-top: 130px;
  margin: 0;
  li {
    margin: 1rem 0;
  }
  a {
    /* border: 6px solid #f4f4f4; */
    /* background: #f4f4f4; */
    color: #000000;
    display: block;
    text-decoration: none;
  }
  a:hover {
    background: #e4e4e4;
  }

  @media (max-width: 900px) {
    display: flex;
    width: 100%;
    margin: 10px auto;
    border: 1px solid red;
  }

  h2 {
    font-size: 19px;
    line-height: 1rem;
    letter-spacing: 4px;
    text-align: left;
    /* border: 1px solid red; */
    padding: 1rem 0 1rem 0.5rem;
  }

  p {
    color: #777777;
    font-size: 0.8rem;
    font-style: italic;
  }
`

export default Blog
