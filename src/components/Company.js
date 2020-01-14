import React from 'react'
import { useStaticQuery, graphql, Link  } from 'gatsby'
import styled from 'styled-components'



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
                    <button>
                        click here
                    
                    </button>
                
                
                </Link>
            
         </CompanyInfo>
    )
}

export default Company