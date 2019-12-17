import React from 'react'
import styled from 'styled-components'

import logo from '../assets/logo-light_72.png'



// style component

const Image = styled.img`
    height: 85%;
    /* margin: 0 auto; */

`

const Logo = () => {
    return (
       
        <Image src={logo} alt="Company Logo EsfWindows" />
    )
}




export default Logo