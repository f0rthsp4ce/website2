import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

import "./index.css"

const Page = () => {
  return (
    <Layout>
      <div className={"bio-container"}>
        Hello!
      </div>
    </Layout>
  )
}

export default Page