import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Layout from "../components/HomePage/Layout"
import styled from 'styled-components'


const Product = () => {
    const data = useStaticQuery(graphql`
    query {
    allNodeProducts {
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
      }
    }
  }
}
`)
    return (
        <Layout>
            <Products>
                <h1>Products page</h1>
                {data.allNodeProducts.edges.map((edge) => {
                    return (
                        <li>
                            <Link to={`/products/${edge.node.fields.slug}`}>
                                {edge.node.title}
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


export default Product