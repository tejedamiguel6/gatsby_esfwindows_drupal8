import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { Link } from 'gatsby'



const CollapseMenu = (props) => {
    const { open } = useSpring({ open: props.navbarState ? 0 : 1})

    if (props.navbarState === true ) {
        return (
            <CollapseWrapper style={{
                transform: open.interpolate({
                    range: [0, 0.2, 0.3, 1],
                    output: [0, -20, 0, -200]
                }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
            }} 
            >
                <NavLinks>
                    <li><Link to="/shadingproducts" onClick={props.handleNavbar}>Shading Product</Link></li>
                    <li><Link to="/windows" onClick={props.handleNavbar}>Windows</Link></li>
                    <li><Link to="/curtainwalls" onClick={props.handleNavbar}>Curtain Walls</Link></li>
                    <li><Link to="/hardware" onClick={props.handleNavbar}>Hardware</Link></li>
                    <li><Link to="/doors" onClick={props.handleNavbar}>Doors</Link></li>
                    <li><Link to="/about" onClick={props.handleNavbar}>About</Link></li>
                    <li><Link to="/contact" onClick={props.handleNavbar}>Contact</Link></li>
                </NavLinks>
            </CollapseWrapper>
        )
    }
    return null
}



const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 1;

  @media(min-width: 1121px) {
            display: none;
            
        }
`;


const NavLinks = styled.ul`
    list-style-type: none;
    padding: 2rem 1rem 2rem 2rem;


    & li {
        transition: all 300ms linear 0s;
    }
    
    & a {
        font-size: 1.4rem;
        line-height: 2;
        color: #dfe6e9;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: #fdcb6e;
            border-bottom: 1px solid #fdcb6e;
        } 
        
       
    }
`;

export default CollapseMenu