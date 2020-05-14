import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const gradientBackgrounds = {
  lightBlue: `linear-gradient(180deg, rgba(110,181,208,1) 0%, rgba(86,142,163,1) 100%);`,
  darkBlue: `linear-gradient(180deg, rgba(117,151,154,1) 0%, rgba(106,140,143,1) 100%);`,
  green:
    "linear-gradient(180deg, rgba(168,212,173,1) 0%, rgba(154,200,159,1) 100%);",
}

export default function Tags({ tags }) {
  return (
    <TagsContainer>
      <div className="container tags">
        {tags.map((tag, index) => (
          <Tag>
            <p>{tag.tag}</p>
          </Tag>
        ))}
      </div>
    </TagsContainer>
  )
}

Tags.propTypes = {
  tags: PropTypes.array,
}

Tags.defaultProps = {
  tags: [],
}

const TagsContainer = styled.div`
  margin-bottom: 6rem;

  .tags {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
  }
`

const Tag = styled.div`
  padding: 2rem;
  cursor: pointer;
  border-radius: 1rem;
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  &:nth-of-type(3n + 1) {
    background: ${gradientBackgrounds.lightBlue};
  }

  &:nth-child(3n + 2) {
    background: ${gradientBackgrounds.darkBlue};
  }

  &:nth-child(3n + 3) {
    background: ${gradientBackgrounds.green};
  }
`
