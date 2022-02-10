import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import {portfolioArticle} from '../../components/layout.module.css'

const PortfolioPage = ({ data }) => {
  return (
    <Layout pageTitle="My Portfolio">
      {
        data.allMdx.nodes.map((node) => (
          <article className={portfolioArticle} key={node.id}>
              <h2>
                <Link to={`/portfolio/${node.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>{node.frontmatter.date}: {node.frontmatter.project_roles}</p>
              <p>{node.frontmatter.project_abstract}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "YYYY")
          title
          project_abstract
          project_roles
        }
        id
        slug
      }
    }
  }
`

export default PortfolioPage
