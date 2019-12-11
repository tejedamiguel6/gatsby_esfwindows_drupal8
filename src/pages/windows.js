import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const WindowPage = () => {
   return (
       <Layout>
        <h1>Window page</h1>
        <p>Home<Link to='/'>Home</Link></p>
       </Layout>
   )
}

export default WindowPage