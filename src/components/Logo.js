import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import logo from '../assets/logo-light_72.png'

// style component
const Image = styled.img`
    height: 85%;
    margin-top: 8px;
    /* margin: 0 auto; */

`

const Logo = () => {
    return (
        <Link to='/'>
            <Image src={logo} alt="Company Logo EsfWindows" />
        </Link>
    )
}


export default Logo