import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NowPage = () => (
  <Layout>
    <SEO title="Now" />
    <h1 className="text-3xl mb-4 font-medium">what i'm up to</h1>
    <h2 className="text-xl font-medium">1. at work</h2>
    <ul className="p-4 pl-8">
      <li className="text-lg mb-1">working at <a className="underline" href="https://www.nexusmods.com/">nexusmods</a></li>
      <li className="text-lg mb-1">building a new iteration of the social platform for video game modding</li>
      <li className="text-lg mb-1">using <a className="underline" href="https://nextjs.org">next.js</a> and <a className="underline" href="https://tailwindcss.com">tailwindcss</a></li>
    </ul>
    <h2 className="text-xl font-medium">2. at home</h2>
    <ul className="p-4 pl-8">
      <li className="text-lg mb-1">preparing for a new arrival (!)</li>
      <li className="text-lg mb-1">working on <Link className="underline" to="/">my own personal website</Link></li>
      <li className="text-lg mb-1">trying to complete star wars: jedi fallen order</li>
    </ul>
    <h2 className="text-xl font-medium">3. online</h2>
    <ul className="p-4 pl-8">
      <li className="text-lg mb-1">lurking dev twitter</li>
      <li className="text-lg mb-1">looking out for inspiration on codepen</li>
      <li className="text-lg mb-1">learning about accessibility</li>
    </ul>
  </Layout>
)

export default NowPage
