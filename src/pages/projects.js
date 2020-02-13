import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Hire Me" />
    <h1>Hire Me</h1>
    <p>I'm a pretty good employee</p>
    <Link to="/">Go back to the beginning</Link>
  </Layout>
)

export default SecondPage
