import React from 'react'
<<<<<<< HEAD
import { Link } from 'gatsby'
=======
import { Link, useStaticQuery } from 'gatsby'
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
import Layout from '../components/Layout'
import Head from '../components/Head'


const WindowPage = () => {
<<<<<<< HEAD
=======
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

>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
   return (
       <Layout>
           <Head title='Windows' />
                <h1>Window page</h1>
                <p>Home<Link to='/'>Home</Link></p>
       </Layout>
   )
}

export default WindowPage