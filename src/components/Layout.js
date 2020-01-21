import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import '../styles/index.scss'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'


class Layout extends Component {
    state = {
        navbarOpen: false
    }
    handleNavbar = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen})
    }
    render () {
        return (
            <ThemeProvider theme={theme} >
                <StyledPage>
                    <Navbar 
                        navbarState={this.state.navbarOpen}
                        handleNavbar={this.handleNavbar}
                    />
                    <InnerPage>
                        {this.props.children}
                    </InnerPage>
                </StyledPage>
                <Footer />
            </ThemeProvider>
        )
    }
}

const theme = {
    maxWidth: 'auto',
<<<<<<< HEAD
}

const StyledPage = styled.div`
    background: white;
    color: black;
    
`
const InnerPage = styled.div`
    border: 1px solid red;
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
=======
    
}

const StyledPage = styled.div`
    margin: 0 auto;
    background: white;
    color: black;
    /* border: 1px solid red; */
    
`
const InnerPage = styled.div`
    /* border: 1px solid red; */
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    /* padding: 160px 30px; */
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
    display: flex;
    flex-direction: column;
    min-height: 100vh;;
    flex-grow: 1;
`

export default Layout



