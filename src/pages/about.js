// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="I'm Todd Campbell-Crow">
      <p>I'm a web dev who found his way into specializing in HTML email. I am empathetic, curious, and a persistent organizer.</p>

      <p>Beyond just HTML emails, I help startups and teams get their message heard by any means I can.</p>

      <p>I started my career as a technical recruiter (with 50+ candidates placed!). But I was fascinated almost every time a developer shared insights into their craft--so fascinated that jealousy got the better of me and I resigned to teach myself web development. I've bonded with clients, having worked on more than a hundred email campaigns with the Icahn School of Medicine at Mount Sinai. </p>

      <p>My next step is joining a team--I am proud of what I've done, but I know how much more there is for me to learn.</p>

      <p>When I'm not coding, writing procedure docs, or talking with clients, I am either singing my toddler lullabyes, reading about history, or thinking up a bad pun. I also deeply love immersive games, hiking, and cooking.</p>

      <p>Looking for a developer to code up pixel-perfect emails? Reach out and tell me about your team!</p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage
