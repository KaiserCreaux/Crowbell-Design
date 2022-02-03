import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const PortfolioPage = ({ data }) => {
  return (
    <Layout pageTitle="My Portfolio">
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default PortfolioPage