import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import styled from 'styled-components'


const BlogPost = styled.ol`
    list-style-type: none;
    margin: 0;
    li {
        
        margin: 1rem 0;
    
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
        font-size: .8rem;
        font-style: italic;
    }
   
`;


const Blog = () => {
    const data = useStaticQuery(graphql`
    query {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          date
        }
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
            This is the blog page
            <BlogPost>
                {data.allMarkdownRemark.edges.map((edge) => (
                    <li>
                        <Link to={`/blog/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>

                        </Link>


                    </li>
                ))}


            </BlogPost>



        </Layout>
    )
}

export default Blog