// Step 1: Import React
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import { emphasis } from '/src/components/layout.module.css'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="I'm Todd Campbell-Crow.">
      <p>I'm a web dev who found his way into specializing in HTML email. I am empathetic, curious, and a persistent organizer.</p>

      <p className={emphasis}>I am seeking to join a team where I can grow my skills and work with exciting clients.</p>

      <p>Beyond just HTML emails, I help startups and teams get their message heard by any means I can.</p>

      <p>I started my career as a technical recruiter (with 50+ candidates placed!). But I was fascinated almost every time a developer shared insights into their craft--so fascinated that jealousy got the better of me and I embarked on teaching myself web development. I've bonded with clients, having worked on more than a hundred email campaigns with the <a href="https://giving.mountsinai.org/site/SPageServer" target="_blank" rel="noreferrer">Icahn School of Medicine at Mount Sinai</a>.</p>
      <h3>What's next?</h3>
      <p>My next step is joining a team--I am proud of what I've done, but I know how much more there is for me to learn.</p>

      <p>What about when I'm not coding, writing procedure docs, or talking with clients? You'll find me either singing my toddler <a href="https://www.youtube.com/watch?v=RHMLL8oK7dg"  rel="noreferrer" target="_blank">lullabyes</a>, reading about history, or thinking up bad puns. I also deeply love immersive games, <a href="https://photos.app.goo.gl/umvuL5vVZ1VFgMZW7" rel="noreferrer" target="_blank">hiking</a>, and cooking.</p>
      <p><a href="https://drive.google.com/file/d/1aRjpu4mCInhH8qXpqzNzDfaeuV8cIwZI/view?usp=sharing" target="_blank"  rel="noreferrer">My Resume</a></p>
      <p>Looking for a developer to code up pixel-perfect emails? <a href="#contactForm">Reach out and tell me about your team!</a></p>
      <StaticImage alt="A portrait of Todd" src="../images/about/portrait.png" />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage
