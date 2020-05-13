import React from "react"
import styled from "styled-components"

import { Button } from "./shared"
import GithubLogo from "../images/github.svg"

export default function Footer() {
  return (
    <StyledFooter>
      <div className="container footer-content">
        <div className="left-section">
          <h5>exerciseroutines.com</h5>
          <p>
            A curated collection of the most popular and effective exercise
            routines and resources out there.
          </p>
          <img src={GithubLogo} alt="Github" />
        </div>
        <div className="right-section">
          <Button label="Suggest an addition" />
        </div>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding: 6rem 0;

  .footer-content {
    display: flex;
    justify-content: space-between;
  }

  h5 {
    font-size: 2rem;
    font-weight: 600;
  }

  p {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    color: var(--font-grey);
  }

  img {
    height: 2.5rem;
    width: auto;
    margin-top: 1.5rem;
    cursor: pointer;
  }

  .left-section {
    width: 30rem;
  }

  .right-section {
    display: flex;
    align-items: flex-end;
  }
`
