import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Websites" />
    <h1>Need a website?</h1>
    <p>I can make one for you!</p>
    <Link to="/">Go back to the beginning</Link>
  </Layout>
)

export default SecondPage
