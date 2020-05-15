import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import "normalize.css"

import Header from "./header"
import Footer from "./Footer"

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

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Main = styled.main``

// Global Styles
const GlobalStyle = createGlobalStyle`
*, html, h1 {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  html {
    --background: #f1f3f5;
    --font-black: #292929;
    --font-grey: rgb(153, 153, 153);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    /* font-weight: 100; */
    font-size: 10px;
    scroll-behavior: smooth;
  }

  body {
    overflow-y: scroll;
    color: var(--font-black);
  }

  a {
    text-decoration: none;
  }

  body::-webkit-scrollbar {
    width: 12px;
  }

  html {
    scrollbar-width: thin;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 4rem;
  }
`
