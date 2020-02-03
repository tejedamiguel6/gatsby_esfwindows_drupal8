import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import Head from '../components/Head'
import styled from 'styled-components'




const BlogLayout = styled.div`
  max-width:: 89 0px;
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
    body {
      value
    }
    created
    relationships {
      field_blog_image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}

`

const Blog = ({data}) => {
  

  const post = data.nodeBlog
  const image = data.nodeBlog.relationships.field_blog_image

  
  console.log(image)
    return (
        <Layout>
          <BlogLayout>
          <Head title={data.nodeBlog.title} />
          <h1>{data.nodeBlog.title}</h1>

          {image ? (
            <div>
              <Img fluid={ post.relationships.field_blog_image[0].localFile.childImageSharp.fluid} />
              <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>

            </div>
          ) :
          <p dangerouslySetInnerHTML={{ __html: post.body.value}}></p> 
          }
            
          </BlogLayout>  
        </Layout>


    )
}

export default Blog