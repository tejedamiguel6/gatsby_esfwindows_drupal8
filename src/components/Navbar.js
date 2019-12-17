import React from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'
import { Link } from 'gatsby'
import { useSpring, animated, config } from 'react-spring'



// setting my styled-components here
// if styling gets any bigger, maybe break it down
// into it's on file.

const NavBar = styled(animated.nav)`
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        background: #2c385b;
        z-index: 1;
        font-size: 1.4rem;
        /* border: 1px solid red; */
    `

const FlexContainer = styled.div`
        max-width: 120rem;
        display: flex;
        margin: auto;
        padding: 0 2rem;;
        justify-content: space-between;
        height: 5rem;
        `;

const NavLinks = styled(animated.ul)`
        display: flex;
        justify-self: end;
        list-style-type: none;
        margin: auto 0;
        
        & a {
            color: #dfe6e9;
            text-transform: uppercase;
            font-weight: 500;
            font-size: 19px;
            border-bottom: 1px solid transparent;
            margin: 0 1.5rem;
            transition: all 300ms linear 0s;
            text-decoration: none;
            cursor: pointer;

            &:hover {
            color: #fdcb6e;
            border-bottom: 1px solid #fdcb6e;
            }

            @media (max-width: 768px) {
            display: none;
            }
        }
        `;


const Navbar = (props) => {

    // using springs 
    const barAnimation = useSpring({
        from: { transform: 'translate3d(0, -10rem, 0)' },
        transform: 'translate3d(0, 0, 0)',
    });

    const linkAnimation = useSpring({
        from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
        to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        delay: 800,
        config: config.wobbly,
    });


    return (
        <NavBar style={barAnimation}>
            <FlexContainer>
                <Logo />
                <NavLinks style={linkAnimation}>
                    <li>
                        <Link to='/windows'>Windows</Link>
                    </li>
                    <li>
                        <Link to='/doors'>Doors</Link>
                    </li>
                    <li>
                        <Link to='/curtainwalls'>Curtain Walls</Link>
                    </li>
                    <li>
                        <Link to='/hardware'>Hardware</Link>
                    </li>
                    <li>
                        <Link to='/shadingproducts'>Shading Products</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    {/* <li>
                        <Link to='/contact'>Contact</Link>

                        </li> */}
                    {/* <li>
                        <Link to='/blog'>Blog</Link>
                        </li> */}
                </NavLinks>
            </FlexContainer>
        </NavBar>
    )
}


export default Navbar




