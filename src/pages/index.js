// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
        <Layout pageTitle="Welcome to Crowbell Design!">
      <h2>Be Heard</h2>
      <p>This site is built with Gatsby.js! It's fantastic stuff.</p>
      <StaticImage alt="Feeding a cat spaghetti" src="https://i.imgur.com/m9HOoFn.jpg" />
      <StaticImage alt="A clever Owlin Rogue" src="../images/OwlinRogue.jpg" />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage
