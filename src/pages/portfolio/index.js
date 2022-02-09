import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const PortfolioPage = ({ data }) => {
  return (
    <Layout pageTitle="My Portfolio">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/portfolio/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
          <p>{node.frontmatter.date}</p>
          <h5>{node.frontmatter.project_abstract}</h5>
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
        }
        id
        slug
      }
    }
  }
`

export default PortfolioPage
