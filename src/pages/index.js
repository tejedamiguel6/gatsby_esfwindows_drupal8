import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/Layout'

import styled from 'styled-components'


const Hero = styled.div`
    padding: 100px;


`


const Home = () => {
    return (
        <Layout>
            <Hero>
               

                <button>
                    Submit
                </button>

            </Hero>
            
            
        </Layout>
    )
    
}




export default Home