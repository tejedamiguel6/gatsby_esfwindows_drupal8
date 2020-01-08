import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'


const Hero = styled.div`
    padding: 100px;


`



const Home = () => {


    return (
        <Layout>
            <Hero>
                <h1>Home page</h1>
               

               

            </Hero>
            
            
        </Layout>
    )
    
}




export default Home