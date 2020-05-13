import React from "react"
import styled from "styled-components"

export default function ProgramCard({ program }) {
  const { program: title, description, url, tags } = program

  return (
    <StyledProgramCard href={url} target="_blank">
      <div className="content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <Tags>
        {tags.map(tag => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
    </StyledProgramCard>
  )
}

const StyledProgramCard = styled.a`
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
  transition: all 0.2s ease-in-out;
  max-width: 350px;
  height: max-content;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.09) 0px 5px 20px;
  }

  .content {
    border-radius: 1rem 1rem 0 0;
    padding: 2rem;
    background: #fff;
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

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  border-top: solid 1px rgba(102, 119, 136, 0.05);
`

const Tag = styled.span`
  color: var(--font-grey);
  margin-right: 1rem;
  font-size: 1rem;
`
