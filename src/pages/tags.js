import React from "react"

// Utilities
import kebabCase from "lodash/kebabCase"
import Layout from "../components/layout"
import SEO from "../components/seo"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"

// Components
import { Link, graphql } from "gatsby"


class TagsPage extends React.Component {
    render() {
      const { data } = this.props
      const siteTitle = data.site.siteMetadata.title
      const pageTitle = "Tags"
      const tags = data.tagsGroup.group  
      return (
<Layout title={siteTitle}>    
                  <SEO title="About Eat, Feed, and Repeat" keywords={[`blog`, `motherhood`, `parenthood`, `travel`, `breastfeeding`, `diaper`, `sleep training`,`delivery`,`travel`]}/>

          <article className="post-content page-template no-image">
            <div className="post-content-body">
              <h1 className="page-head-title">
                Tags
              </h1>
                <div>
                <ul>
                    {tags.map(tag => (
                        <li key={tag.fieldValue}>
                        <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                            {tag.fieldValue} ({tag.totalCount})
                        </Link>
                        </li>
                    ))}
                </ul>
                    </div>
                </div>
         </article>
    </Layout>
      )
    }
  }
  
  export default TagsPage
  
  export const pageQuery = graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `