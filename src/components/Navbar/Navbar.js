import React from "react"
import styled from "styled-components"
import Logo from "../Navbar/Logo"
import BurgerMenu from "./BurgerMenu"
import CollapseMenu from "./CollapseMenu"
import { useSpring, animated, config } from "react-spring"
import { Link, graphql, useStaticQuery } from "gatsby"

import styles from "../../styles/index.scss"

const Navbar = props => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0" },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 20,
    config: config.wobbly,
  })

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opcaity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opcaity: 1 },
    delay: 20,
    config: config.wobbly,
  })

  const data = useStaticQuery(graphql`
    query {
      parentMainMenu: allMenuLinkContentMenuLinkContent(
        sort: { fields: [weight], order: ASC }
        filter: { description: { eq: "MainMenu" } }
      ) {
        edges {
          node {
            expanded
            title
            drupal_id
            drupal_parent_menu_item
            fields {
              lowerCaseMenuTitle
            }
          }
        }
      }

      aluminumChildren: allMenuLinkContentMenuLinkContent(
        filter: {
          drupal_parent_menu_item: {
            eq: "menu_link_content:be7894ec-d78d-488c-82a2-379c3db8ed6c"
          }
        }
      ) {
        edges {
          node {
            id
            title
            fields {
              lowerCaseMenuTitle
            }
            link {
              uri
            }
            drupal_parent_menu_item
          }
        }
      }
    }
  `)

  console.log("HERE IS SOMETHING", data)
  console.log(data.parentMainMenu)
  // creating individual menus becuase they are going to have seperate
  // child menus and drupal makes it complicated...
  const woodWoodClad = data.parentMainMenu.edges[0].node.title
  const woodWoodCladLink =
    data.parentMainMenu.edges[0].node.fields.lowerCaseMenuTitle

  const aluminum = data.parentMainMenu.edges[1].node.title
  const aluminumLink =
    data.parentMainMenu.edges[1].node.fields.lowerCaseMenuTitle

  const shadingProduct = data.parentMainMenu.edges[2].node.title
  const shadingProductLink =
    data.parentMainMenu.edges[2].node.fields.lowerCaseMenuTitle

  const upvc = data.parentMainMenu.edges[3].node.title
  const upvcLink = data.parentMainMenu.edges[3].node.fields.lowerCaseMenuTitle

  const steelAndCustom = data.parentMainMenu.edges[4].node.title
  const steelAndCustomLink =
    data.parentMainMenu.edges[4].node.fields.lowerCaseMenuTitle

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Logo />
          <NavLinks style={linkAnimation}>
            <li>
              <Link to={woodWoodCladLink}>{woodWoodClad}</Link>
            </li>

            <li className="nav__menu_item">
              <Link to={aluminumLink}>{aluminum}</Link>
              <ul className="nav__submenu">
                {data.aluminumChildren.edges.map(edge => (
                  <li className="nav__submenu-item">
                    <Link to={edge.node.fields.lowerCaseMenuTitle}>
                      {edge.node.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link to={shadingProductLink}>{shadingProduct}</Link>
            </li>

            <li>
              <Link to={upvcLink}>{upvc}</Link>
            </li>

            <li>
              <Link to={woodWoodCladLink}>{woodWoodClad}</Link>
            </li>

            <li>
              <Link to={steelAndCustomLink}>{steelAndCustom}</Link>
            </li>

            {/* <li>
              <Link to={woodWoodClad}> </Link>
            </li> */}

            {/* {data.parentMainMenu.edges.map(edge => (
              <li>
                <Link to={edge.node.fields.lowerCaseMenuTitle}>
                  {edge.node.title}
                </Link>
              </li>
            ))} */}
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
        <CollapseMenu />
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  )
}

const NavItem = styled.li`
  border: 1px solid red;
`

// Styled components here
const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d385b;
  z-index: 1;
  font-size: 1.4rem;
`

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
`

const NavLinks = styled(animated.ul)`
  display: flex;
  justify-self: end;
  list-style-type: none;
  margin: 0;

  li {
    padding-top: 29px;
  }

  & a {
    padding-top: -24px;
    font-size: 17px;
    color: #dfe6e9;

    text-transform: uppercase;
    font-weight: 500;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 1122px) {
      display: none;
    }
  }
`

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 1121px) {
    display: none;
  }
`

export default Navbar
