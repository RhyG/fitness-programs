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

  return { programs: allProgram.nodes, tags: allTag.nodes }
}
