import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MePage = () => (
  <Layout>
    <SEO title="Me" />
    <h2 className="text-3xl mb-4 font-medium">my skills</h2>
    <p className="text-md pl-4 mb-2">i am an expert with javascript, both in the browser and using node</p>
    <p className="text-md pl-6 mb-2">i have been developing front ends for the past 7 years, using first jquery, then angularjs, then angular and now react</p>
    <p className="text-md pl-8 mb-2">i am a talented problem solver, proficient at debugging issues from user to browser to server to infrastructure</p>
    <p className="text-md pl-10 mb-2">i am experienced at writing html, php, css, ruby on rails, c#, sql and more</p>
    <p className="text-md pl-12 mb-2">i have used a wide array of devops tools, from github/bitbucket/gitlab to jenkins/teamcity/gitlab-ci to docker/kubernetes/octopus deploy</p>
    <h2 className="text-3xl my-4 font-medium">my values</h2>
    <p className="text-md pl-4 mb-2">the web is for everyone - be compassionate with your code as much as your interactions</p>
    <p className="text-md pl-6 mb-2">as a person with a privileged background, i need to listen to and raise up minoritised voices</p>
    <p className="text-md pl-8 mb-2">i want my children to see me as an example, and to be accepting and understanding</p>
    <p className="text-md pl-10 mb-2">all people should be treated equally <span className="font-medium">and that includes equal pay</span></p>
    <p className="text-md pl-12 mb-2"><a className="underline font-medium" href="https://slides.com/tatianamac/systems-of-systems#/79">intent does not erase impact</a></p>
  </Layout>
)

export default MePage
