import React from 'react'
import styled from 'styled-components'


const BurgerMenu = (props) => {
    return (
        <Wrapper onClick={props.handleNavbar}>
            <div className={props.navbarState ? 'open' : ''}>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
            </div>
        </Wrapper>
        

    )
}

<<<<<<< HEAD
=======

>>>>>>> 1681128df6f74cc3b42a3b2c5c14d1ae7172c199
const Wrapper = styled.div`
    position: relative; 
    padding-top: .7rem;
    cursor: pointer;
    display: block;

    & span {
        background: #fdcb6e;
        display: block;
        position: relative;
        width: 3.5rem;
        height: .4rem;
        margin-bottom: .7rem;
        transition: all ease-in-out 0.2s;
    }

    .open span:nth-child(2) {
        opacity: 0;
    }

    .open span:nth-child(3) {
        transform: rotate(55deg);
        top: -27px;
    }

    .open span:nth-child(1) {
        transform: rotate(-55deg);
        top: 11px;
    }

   
`;

export default BurgerMenu