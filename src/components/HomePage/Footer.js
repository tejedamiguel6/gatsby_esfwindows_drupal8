import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const Footer = () => {
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
    <Container>
      <div>
        <p>Esfwindows</p>
        <h3>Follow us on:</h3>
      </div>
    </Container>
  )
}

const Container = styled.footer`

  background-color: #282828;
  /* margin-top: 1rem; */
  padding-bottom: 10px;
  text-align: center;

  p,
  h3 {
    font-family: 'Lora';
    color: white;
    padding: 1rem;
  }
`

export default Footer
