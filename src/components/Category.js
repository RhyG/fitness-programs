import React, { useState } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

import ProgramCard from "./ProgramCard"

export default function Category({ title, programs }) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <CategoryContainer>
      <div className="category-title" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="line-through">
          <span>{title}</span>
        </h3>
      </div>

      <AnimatePresence initial={true}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="programs">
              {programs.map(program => (
                <ProgramCard program={program} key={program.id} />
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
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
    column-gap: 1.5rem;
    row-gap: 1.5rem;
  }
`
