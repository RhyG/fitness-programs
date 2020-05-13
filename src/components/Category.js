import React from "react"
import styled from "styled-components"

import ProgramCard from "./ProgramCard"

export default function Category({ title, programs }) {
  return (
    <CategoryContainer>
      <div className="category-title">
        <h3 className="line-through">
          <span>{title}</span>
        </h3>
      </div>
      <div className="programs">
        {programs.map(program => (
          <ProgramCard program={program} key={program.id} />
        ))}
      </div>
    </CategoryContainer>
  )
}

const CategoryContainer = styled.div`
  .category-title {
    margin-bottom: 2rem;
    cursor: pointer;

    h3,
    span {
      font-size: 1.6rem;
      font-weight: 500;
      padding-right: 1rem;
      background: var(--background);
    }

    .line-through {
      border-bottom: 2px solid rgba(234, 234, 234, 0.5);
      line-height: 0.1em;
    }
  }

  .programs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
  }
`
