import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import Head from '../components/Head'




export const query = graphql`
  query($id: String!) {
  nodeBlog(id: {eq: $id}) {
    id
    title
    # created (formatString: "MMMM D0, YYYY")
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
  console.log('Here is the body of the post', post )

  

  console.log(image)
    return (
        <Layout>
          <Head title={data.nodeBlog.title} />
          <h1>{data.nodeBlog.title}</h1>

          {image ? (
            <div>
              <Img fluid={ post.relationships.field_blog_image[0].localFile.childImageSharp.fluid} />
              <div dangerouslySetInnerHTML={{ __html: post.body[0].value }}></div>

            </div>
          ) :
          <div dangerouslySetInnerHTML={{ __html: post.body.value}}></div> 
          }
            
            
        </Layout>


    )
}

export default Blog