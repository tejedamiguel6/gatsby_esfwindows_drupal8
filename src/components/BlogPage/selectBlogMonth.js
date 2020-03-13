import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

const SelectBlogMonth = ({ selected }) => {
  const data = useStaticQuery(graphql`
    query {
      allNodeBlog {
        edges {
          node {
            field_year
            field_month
            created(formatString: "MMMM")
            id
            title
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // console.log(months, 'here is th month')
  return (
    <SideBar>
      {data.allNodeBlog.edges.map(edge => {
        // console.log(edge, '@@@~!!')
        const year = edge.node.field_year
        const month = edge.node.field_month
        console.log(month, year, 'heres the month')
        return (
          <div>
            <Link to={`/blog/${edge.node.fields.slug}`}></Link>
          </div>
        )
      })}

      <h1>this will show the month of the year and render blogs</h1>
    </SideBar>
  )
}

const SideBar = styled.div`
  padding-top: 7rem;
`
export default SelectBlogMonth
