import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/index.scss'

import layoutStyles from './layout.module.scss'

import styled, { ThemeProvider, injectGlobal} from 'styled-components'


const theme = {
    maxWidth: 'auto'
}


const StyledPage = styled.div`
    background: white;
    color: black;
    
`

const InnerPage = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    min-height: 100vh;;
    flex-grow: 1;

    /* background: red; */

`
const Layout = (props) => {
    return(
        <ThemeProvider theme={theme}>
            <StyledPage>
            <Header />
            <InnerPage>
                {props.children}
            </InnerPage>
           
            
        </StyledPage>
        <Footer />
        </ThemeProvider>
        
        
    )
}

export default Layout