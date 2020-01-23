import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <p className="text-xl p-2">follow me on <a className="underline" href="https://twitter.com/themagickoala1">twitter</a></p>
    <p className="text-xl p-2">fork me on <a className="underline" href="https://github.com/themagickoala">github</a></p>
    <p className="text-xl p-2">heart me on <a className="underline" href="https://codepen.io/themagickoala">codepen</a></p>
    <p className="text-xl p-2">play with me on <a className="underline" href="https://www.nexusmods.com/users/70304248">nexus mods</a></p>
  </Layout>
)

export default ContactPage
