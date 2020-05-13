const { programs, tags } = require("./src/data")

// Add the programs and tags to the graphql API
function sourceNodes({ actions, createNodeId, createContentDigest }) {
  programs.forEach(program => {
    const nodeMeta = {
      id: createNodeId(`program-${program.program}`),
      parent: null,
      children: [],
      internal: {
        type: `Program`,
        mediaType: `text/html`,
        content: JSON.stringify(program),
        contentDigest: createContentDigest(program),
      },
    }

    actions.createNode({ ...program, ...nodeMeta })
  })

  tags.forEach(tag => {
    const nodeMeta = {
      id: createNodeId(`tag-${tag}`),
      parent: null,
      children: [],
      internal: {
        type: `Tag`,
        mediaType: `text/html`,
        content: tag,
        contentDigest: createContentDigest(tag),
      },
    }

    actions.createNode({ tag, ...nodeMeta })
  })
}

module.exports = { sourceNodes }
