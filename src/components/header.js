import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div className="container">
      <h1>Exercise Routines</h1>
      <h2>
        A curated list of the most popular and effective exercise routines and
        resources out there. If it's on here then it works.
      </h2>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const StyledHeader = styled.header`
  padding: 6rem 0;

  h1 {
    font-size: 7rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
  }
`

export default Header
