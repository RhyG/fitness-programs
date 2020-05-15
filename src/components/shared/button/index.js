import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>
}

Button.propTypes = {
  // label: PropTypes.string,
}

Button.defaultProps = {
  label: "",
}

const StyledButton = styled.button`
  padding: 1.5rem;
  font-size: 1.5rem;
  background: linear-gradient(15deg, #678, #6f8793);
  color: #fff;
  border-radius: 0.3rem;
  border: none;
  cursor: pointer;
`
