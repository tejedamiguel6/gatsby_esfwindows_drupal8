import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const CompanyContent = () => {
  // qurying with ID until i figure out how to make this dynamic
  // ID's wont change even if you edit content on drupal side
  const data = useStaticQuery(graphql`
    query {
      nodePage(id: { eq: "99420965-d45e-589c-810a-122e73f01155" }) {
        id
        title
        body {
          value
        }
        field_basic_page_link {
          title
        }
        fields {
          slug
        }
      }
    }
  `)
  console.log("company", data)
  const title = data.nodePage.title
  const body = data.nodePage.body.value
  const button = data.nodePage.field_basic_page_link[0].title

  return (
    <CompanyInfo>
      <h1>{title}</h1>
      <h3 dangerouslySetInnerHTML={{ __html: body }}></h3>
      <Link to={data.nodePage.fields.slug}>
        <Btn>{button}</Btn>
      </Link>
    </CompanyInfo>
  )
}

const Btn = styled.button`
  display: flex;
  color: #2d395b;
  margin: 0 auto;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  padding: 17px 39px;
  font-weight: 700;
`

const CompanyInfo = styled.div`
  padding: 70px;
  h1 {
    text-align: center;
  }
  h3 {
    text-align: center;
    font-size: 19px;
    color: #848484;
    box-sizing: border-box;
  }
`
export default CompanyContent
