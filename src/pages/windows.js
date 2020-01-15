import React from 'react'
import { Link, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'


const WindowPage = () => {
    const data = useStaticQuery(graphql`
        query {
        allNodeWindows {
            edges {
            node {
                id
                title
                body {
                value
        }
        relationships {
          field_images {
            localFile {
              childImageSharp {
                fluid(maxWidth: 540, maxHeight: 450) {
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
console.log('this is from the window page', data)

   return (
       <Layout>
           <Head title='Windows' />
                <h1>Window page</h1>
                <p>Home<Link to='/'>Home</Link></p>
       </Layout>
   )
}

export default WindowPage