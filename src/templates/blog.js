import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import Head from '../components/Head'
<<<<<<< HEAD
import styled from 'styled-components'
=======
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199




<<<<<<< HEAD
const BlogLayout = styled.div`
  max-width:: 890px;
  /* margin: 0 auto; */
  padding-top: 100px;
    h1 {
      text-align: center;
    }

    p {
      line-height: 1.5;
      padding-top: 40px;
      margin-bottom: 30px;


    }

`


export const query = graphql`
 query($slug: String!) {
  nodeBlog(fields: { slug: { eq: $slug } }) {
    title
=======
export const query = graphql`
  query($id: String!) {
  nodeBlog(id: {eq: $id}) {
    id
    title
    # created (formatString: "MMMM D0, YYYY")
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
    body {
      value
    }
    created
    relationships {
      field_blog_image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
<<<<<<< HEAD
              ...GatsbyImageSharpFluid
=======
             ...GatsbyImageSharpFluid
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
            }
          }
        }
      }
    }
  }
}
<<<<<<< HEAD

`

const Blog = ({data}) => {
  

=======
`


const Blog = ({data}) => {
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
  const post = data.nodeBlog
  const image = data.nodeBlog.relationships.field_blog_image
  console.log('Here is the body of the post', post )

<<<<<<< HEAD
  
  console.log(image)
    return (
        <Layout>
          <BlogLayout>
=======
  console.log(image)
    return (
        <Layout>
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
          <Head title={data.nodeBlog.title} />
          <h1>{data.nodeBlog.title}</h1>

          {image ? (
            <div>
              <Img fluid={ post.relationships.field_blog_image[0].localFile.childImageSharp.fluid} />
              <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>

            </div>
          ) :
<<<<<<< HEAD
          <p dangerouslySetInnerHTML={{ __html: post.body.value}}></p> 
          }
            
          </BlogLayout>  
=======
          <div dangerouslySetInnerHTML={{ __html: post.body.value}}></div> 
          }
            
            
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
        </Layout>


    )
}

export default Blog