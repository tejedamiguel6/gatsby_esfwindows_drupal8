import React from 'react'
import { Link }  from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'



const Contact = () => {
    return (
        <Layout>
            <Head title='contact'/>
            <h1>Contact Page</h1>
            <p>Home<Link to='/'>Home</Link></p>
        </Layout>
 
    )
}


export default Contact