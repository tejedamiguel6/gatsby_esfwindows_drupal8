import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'





const About = () => {

   
    return (
    <Layout>
        <h1>About page</h1>
        <p>Home<Link to='/'>Home</Link></p>
        
       
    </Layout>
    )
}


export default About