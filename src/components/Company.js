import React from 'react'
import { useStaticQuery, graphql, Link  } from 'gatsby'
import styled from 'styled-components'






const Company = () => {
    const data = useStaticQuery(graphql`
        query {
        nodePage(id: { eq: "64fb921b-a30d-5a4a-99f5-510e9de130fa" }) {
        id
        title
        body {
        value
        }
    }
}
`)
    return (
        <CompanyInfo>
                <h1>
                    {data.nodePage.title}
                </h1>
                <p dangerouslySetInnerHTML ={{ __html: data.nodePage.body.value}} ></p>
                
                <Link to={`/${data.nodePage.id}`}> 
                
                    <Btn>Learn More</Btn> 
                </Link>
         </CompanyInfo>
    )
}





// styled components


const CompanyInfo = styled.div`
    padding: 60px;
     
     h1 {
         text-align: center;
        
     }

     p {
         text-align: center;
         font-size: 19px;
         color: #848484;
         box-sizing: border-box;
     }

`;

const Btn = styled.button`
    display: flex;
    color: #2D395B;
    margin: 0 auto;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    border: none;
    /* border: 1px solid red; */
    padding: 17px 39px;
    font-weight: 700;
`


export default Company