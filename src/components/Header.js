import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'


import styled from 'styled-components'

// import headerStyles from './header.module.scss'


const HeaderNav = styled.ul`
    color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    font-size: 1rem;
    list-style-type: none;
    padding-top: 2rem;
    margin: 10px;
     a {
         text-decoration: none;
         color: #000000;
         margin: 5px;
     }
     @media (max-width: 1080px) {
         grid-template-columns: 1fr;
         border: 1px solid red;
         &:before {
             content: 'hhhii'
         }


     }

`;

const Logo = styled.h1`
    font-size: 2rem;



`;


const Header = () => {

    // const data = useStaticQuery(graphql`
    //     query {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }

    // `)
    return (
        <header className={'/'}>

            <nav>
                <HeaderNav>
                    <Link className={'/'} to='/'>
                        {/* {data.site.siteMetadata.title} */}
                        <Logo>Logo</Logo>

                    </Link>


                    <li>
                        <Link className={'/'} to='/windows'>Windows</Link>
                    </li>

                    <li>
                        <Link className={'/'} to='/doors'>Doors</Link>
                    </li>

                    <li>
                        <Link className={'/'} to='/curtainwalls'>Curtain Walls</Link>
                    </li>

                    <li>
                        <Link className={'/'} to='/hardware'>Hardware</Link>
                    </li>

                    <li>
                        <Link className={'/'} to='/shadingproducts'>Shading Products</Link>
                    </li>

                    <li>
                        <Link className={'/'} to='/about'>About</Link>
                    </li>

                    <li>

                        <Link className={'/'} to='/contact'>Contact</Link>
                    </li>

                    <li>
                        <Link className={'/'} to='/blog'>Blog</Link>
                    </li>
                </HeaderNav>

            </nav>

        </header>
    )
}

export default Header