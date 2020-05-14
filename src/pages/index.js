import React, { useState } from "react"
import styled from "styled-components"

import useGetData from "../hooks/useGetData"
import { getProgramsFromTag, getEmoji } from "../utils"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Category from "../components/Category"
import Tags from "../components/Tags"

const IndexPage = () => {
  const { programs, categories, tags } = useGetData()

  return (
    <Layout>
      <SEO title="Exercise Routines - Find What Gets You Fit" />
      {/* <Tags tags={tags} /> */}
      <ContentContainer>
        <div className="container categories">
          {tags.map(({ tag, id }) => (
            <Category
              title={`${getEmoji(tag)} ${tag.toUpperCase()}`}
              programs={getProgramsFromTag(programs, tag)}
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
