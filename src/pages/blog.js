import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Head from '../components/Head'




const Blog = () => {

const data = useStaticQuery(graphql`
query {
    allNodeBlog {
        edges {
            node {
                id
                title
<<<<<<< HEAD
                fields {
                    slug
                }
=======
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
                
            }
        }
    }
}
`)
    
    return (
        <Layout>
            <Head title='Blog' />
            <BlogPost>
                {data.allNodeBlog.edges.map((edge) => (
                    <li>
<<<<<<< HEAD
                        <Link to={`/blog/${edge.node.fields.slug}`}>
                            <h2>{edge.node.title}</h2>
                            <p>{edge.node.date}</p>

                        </Link>

=======
                        <Link to={`/blog/${edge.node.id}`}>
                            <h2>{edge.node.title}</h2>
                            <p>{edge.node.date}</p>
                        </Link>
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
                    </li>
                ))}
            </BlogPost>
        </Layout>
    )
}



<<<<<<< HEAD
const BlogPost = styled.ol`
    list-style-type: none;
    padding-top: 130px;
=======

const BlogPost = styled.ol`
    list-style-type: none;
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
    margin: 0;
    li {
        
        margin: 1rem 0;
<<<<<<< HEAD
        border: 1px solid red;
        
=======
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
    
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




export default Blog