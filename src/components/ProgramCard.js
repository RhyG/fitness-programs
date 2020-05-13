import React from "react"
import styled from "styled-components"

export default function ProgramCard({ program }) {
  const { program: title, description, url, tags } = program

  return (
    <StyledProgramCard href={url} target="_blank">
      <h4>{title}</h4>
      <p>{description}</p>
    </StyledProgramCard>
  )
}

const StyledProgramCard = styled.a`
  padding: 2rem;
  background: #fff;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.09) 0px 5px 20px;
  }

  h4 {
    font-size: 2rem;
    color: var(--font-black);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.3;
    color: var(--font-grey);
  }
`
