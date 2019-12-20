import React, { Component } from 'react'
import Footer from '../components/Footer'
import '../styles/index.scss'
import Navbar from '../components/Navbar'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'



class Layout extends Component {

    state = {
        navbarOpen: false
    }

    handleNavbar = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen });
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Navbar
                        navbarState={this.state.navbarOpen}
                        handleNavBar={this.handleNavBar}
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





// const Layout = (props) => {
//     return(
//         <ThemeProvider theme={theme}>
//             <StyledPage>
//             <Navbar />
//             <InnerPage>
//                 {props.children}
//             </InnerPage>


//         </StyledPage>
//         <Footer />
//         </ThemeProvider>


//     )
// }

export default Layout







// styled components
const theme = {
    maxWidth: 'auto'
}


const StyledPage = styled.div`
        background: white;
        color: black;
        
    `
const InnerPage = styled.div`
        max-width: ${props => props.theme.maxWidth};
        margin: 100px auto;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        min-height: 100vh;;
        flex-grow: 1;

        /* background: red; */

    `