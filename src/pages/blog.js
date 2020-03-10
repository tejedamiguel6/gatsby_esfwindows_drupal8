import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/HomePage/Layout'
import styled from 'styled-components'
import Head from '../components/HomePage/Head'

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeBlog {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <BlogPost>
        {data.allNodeBlog.edges.map(edge => (
          <li>
            <Link to={`/blog/${edge.node.fields.slug}`}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.date}</p>
            </Link>
          </li>
        ))}
      </BlogPost>
    </Layout>
  )
}

const BlogPost = styled.ol`
  list-style-type: none;
  padding-top: 130px;
  margin: 0;
  li {
    margin: 1rem 0;
    border: 1px solid red;
  }
  a {
    background: #f4f4f4;
    color: #000000;
    padding: 1rem;
    display: block;
    text-decoration: none;
  }
  a:hover {
    background: #e4e4e4;
  }

  h2 {
    margin-bottom: 0;
  }

  p {
    color: #777777;
    font-size: 0.8rem;
    font-style: italic;
  }
`

export default Blog
