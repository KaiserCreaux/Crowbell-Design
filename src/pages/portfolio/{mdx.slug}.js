import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const PortfolioPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />

        <h3>{data.mdx.frontmatter.project_abstract}</h3>
        <h4>Project roles: {data.mdx.frontmatter.project_roles}</h4>
        <h4>Project deliverable: {data.mdx.frontmatter.project_deliverable}</h4>

      <MDXRenderer>
          {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        project_abstract
        project_deliverable
        project_roles
      }
      body
    }
  }
`
export default PortfolioPost
