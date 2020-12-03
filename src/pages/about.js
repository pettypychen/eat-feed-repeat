import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About Eat, Feed, and Repeat" keywords={[`blog`, `motherhood`, `parenthood`, `travel`, `breastfeeding`, `diaper`, `sleep training`,`delivery`,`travel`]}/>

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 className="page-head-title">
            Hi, I am a Mother of 👶🏻 🍼, Doctor 👩🏻‍⚕️, <br></br>
            and Product Manager in Digital Health 👩🏻‍💻.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>^ I am writing from my ideal office where it is childfree and clean.</figcaption>
          </figure>
          <h3 id="dynamic-styles">I hustle</h3>
          <p>
            People don't see how much work I put into cleaning and feeding my kid
            but the glamorised version of my Instagram. 
          </p>
          <p>
            I love to write because I have an opinion about everything. Writing can be
            therapeutic when time gets rough (like hair-pulling rough) and the baby can't vocalize her 
            thoughts. 
          </p>
          <p>
            Don't forget to check out {" "}
            <a href="https://hola-yolo.weebly.com/">
              my life before a kid
            </a>{" "}
            for more ways to feel FOMO about the childfree life while I slowly reconciliate 
            my identity before the life of a bébé.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
