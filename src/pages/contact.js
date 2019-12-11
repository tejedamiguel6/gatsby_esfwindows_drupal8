import React from 'react'
import { Link }  from 'gatsby'
import Layout from '../components/Layout'


const Contact = () => {
    return (
        <Layout>
            <h1>Contact Page</h1>
            <p>Home<Link to='/'>Home</Link></p>
        </Layout>
 
    )
}


export default Contact