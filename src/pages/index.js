import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from '../components/image';
import SEO from "../components/seo"

const buttonStyle = {
  padding: "1em",
  color: "#f0efed",
  textDecoration: "none",
  fontWeight: 'bold',
}
const buttonSpacing = {
  borderRadius: '1rem',
  margin: "1rem",
  padding: "1rem",
  background: `#bf5a50`,
}


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <StyledBioBox>
      <h1>Hey there!</h1>
      <p>My name is Katie.</p>
      <p>I'm a software engineer, and also many other things. </p>
      <p>Like: a lifelong learner, a speaker of many languages, a problem-solver, and person interested in building all kinds of things!</p>
      <p>Let's discuss and develop any ideas you have floating around.</p>
    </StyledBioBox>
    <Image />
    </div>
    <div
      style={buttonSpacing}
    >
      <Link to="/website/" style={buttonStyle}>
        Want to build something?
      </Link>
    </div>
    <div style={buttonSpacing}>
      <Link to="/contact/" style={buttonStyle}>
        Hire me!
      </Link>
    </div>
    <div style={buttonSpacing}>
      <Link to="/projects/" style={buttonStyle}>
        Check out my cool projects!
      </Link>
    </div>
  </Layout>
)

const StyledBioBox = styled.div`
  // background: #f0efed;
  margin: 1rem;
`;

export default IndexPage
