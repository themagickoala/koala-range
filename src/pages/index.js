import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-3xl mb-4 sm:text-big pl-2 lg:pl-0 lg:text-giant font-medium">themagickoala</h1>
    <p className="text-xl sm:text-3xl pl-2 mb-4">web developer</p>
    <p className="text-xl sm:text-3xl pl-2 mb-4">father of one (soon to be two)</p>
    <p className="text-xl sm:text-3xl pl-2 mb-4">games enthusiast</p>
    <p className="text-xl sm:text-3xl pl-2 mb-4">humanist</p>
  </Layout>
)

export default IndexPage
