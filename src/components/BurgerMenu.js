import React from 'react'
import styled from 'styled-components'



const BurgerMenu = (props) => {
    // console.log('heelo', props)

    return(
        <Wrapper onClick={props.handleNavbar}>
        
             <div className={props.navbarState ? 'open' : '', console.log('im from burgerMenu Component ', props.handleNavbar)}>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
            </div>
        </Wrapper>
       
    )

}

export default BurgerMenu




// styled component

const Wrapper =styled.div`
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
        transform: rotate()(45deg);
        top: -11px;
    }


    .open span:nth-child(1) {
        transform: rotate()(-45deg);
        top: 11px;
    }


`
















// this is with state ful component


// class BurgerMenu extends Component {

//     state = {
//         navbarOpen: false

//     }

//     handleNavbar = () => {
//         this.setState({ navbarOpen: !this.state.navbarOpen})
//     }


//     render (){
//         return (
//             <Wrapper 
//                 onClick={this.handleNavbar}>
//                 <div className={this.state.handleNavbar ? 'open': console.log('i am ', this.state), ''}>
//                     <span>&nbsp;</span>
//                     <span>&nbsp;</span>
//                     <span>&nbsp;</span>
//                 </div>
//             </Wrapper>

//         )
//     }

// }