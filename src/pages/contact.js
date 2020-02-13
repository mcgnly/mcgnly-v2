import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact Me" />
    <h1>Hi from the contact page</h1>
    <p>Write me a note</p>
    <Link to="/">Go back to the start</Link>
  </Layout>
)

export default SecondPage
