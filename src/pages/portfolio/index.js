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
          <p>Posted: {node.frontmatter.date}</p>
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
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default PortfolioPage
