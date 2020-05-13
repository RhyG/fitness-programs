import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import useGetData from "../hooks/useGetData"
import { getProgramsFromTag, getEmoji } from "../utils"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Category from "../components/Category"

const IndexPage = () => {
  const { programs, tags } = useGetData()

  return (
    <Layout>
      <SEO title="Home" />
      <ContentContainer>
        <div className="container categories">
          {tags.map(tag => (
            <Category
              title={`${getEmoji(tag.tag)} ${tag.tag.toUpperCase()}`}
              programs={getProgramsFromTag(programs, tag.tag)}
              key={tag.id}
            />
          ))}
        </div>
      </ContentContainer>
    </Layout>
  )
}

export default IndexPage

const ContentContainer = styled.div`
  background-color: var(--background);
  padding: 6rem 0;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  color: #85898f;

  h3 {
    font-size: 1.6rem;
    font-weight: 500;
  }

  .categories {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 5rem;
  }
`
