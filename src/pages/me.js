import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MePage = () => (
  <Layout>
    <SEO title="Me" />
    <h2 className="text-3xl mb-4 font-medium">my values</h2>
    <p className="text-md pl-4 mb-2">first and foremost, be kind - the world would be a better place if everybody was kind</p>
    <p className="text-md pl-6 mb-2">as a person with a privileged background, i need to listen to and raise up minoritised voices</p>
    <p className="text-md pl-8 mb-2">i want my children to see me as an example, and to be accepting and understanding</p>
    <p className="text-md pl-10 mb-2">all people should be treated equally <span className="font-medium">and that includes equal pay</span></p>
    <p className="text-md pl-12 mb-2"><a className="underline font-medium" href="https://slides.com/tatianamac/systems-of-systems#/79">intent does not erase impact</a></p>
  </Layout>
)

export default MePage
