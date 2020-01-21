import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'


const WindowPage = () => {
   return (
       <Layout>
           <Head title='Windows' />
                <h1>Window page</h1>
                <p>Home<Link to='/'>Home</Link></p>
       </Layout>
   )
}

export default WindowPage