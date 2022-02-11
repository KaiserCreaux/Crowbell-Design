import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  bearTrap,
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  feedbackInput,
  footer,
  footerText,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}>
            <Link to="/portfolio" className={navLinkText}>
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
    <footer className={footer}>
    <div className={footerText}>
    <a href="https://www.linkedin.com/in/todd-campbell-crow-40b50727" target="_blank">LinkedIn</a><span> | </span>
    <a href="https://github.com/KaiserCreaux" target="_blank">GitHub</a><span> | </span>
    <a href="https://www.instagram.com/kaisercreaux/" target="_blank">Instagram</a>
    </div>
      <form id="contactForm"
      action="https://formspree.io/f/xoqregnk"
      method="POST"
      >
        <label className={bearTrap} type="email" name="_gotcha"></label>
        <label>
          Your name:
          <input type="text" className={feedbackInput} name="name"/>
        </label>
        <label>
          Your email:
          <input type="email" className={feedbackInput} name="_replyto"/>
        </label>
        <label>
          What's up?
          <textarea name="message" className={feedbackInput} ></textarea>
        </label>
        <button type="submit">Get in touch</button>
      </form>
    <div className={footerText}>
      <p>Copyright 2022 Crowbell Design</p>
      </div>
    </footer>
    </div>
  )
}

export default Layout
