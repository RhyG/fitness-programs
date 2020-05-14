import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const { allProgram, allTag } = useStaticQuery(graphql`
    query ProgramsAndTags {
      allProgram {
        nodes {
          program
          description
          url
          tags
          id
        }
      }
      allTag {
        nodes {
          tag
          id
        }
      }
    }
  `)

  const categories = allTag.nodes.map(tag => tag.tag)

  return { programs: allProgram.nodes, categories, tags: allTag.nodes }
}
