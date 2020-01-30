import React from 'react'

import styled from 'styled-components'
import logo from '../../assets/logo-light_72.png'
<<<<<<< HEAD
import { Link } from 'gatsby'
=======
import {Link} from 'gatsby'
>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199



const Image = styled.img `
    height: 75%;
    margin: 10px 0 0 20px;
`


const Logo = () => {
    return(
        <>
            <Link to='/' src={logo} >
            <Image src={logo} alt='Company Logo' />

            </Link>
        </>
    )
}


export default Logo

