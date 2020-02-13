/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Burger from "./Burger"
import Menu from "./Menu"
import Navbar from "./Navbar"
import Main from "./Main"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./global"
import { theme } from "./theme"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [open, setOpen] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Navbar />
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
          <Main children={children} />
          <footer style={{ margin: "0 1rem" }}>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="https://www.github.com/mcgnly">mcgnly</a>
          </footer>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
