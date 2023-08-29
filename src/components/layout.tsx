import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import "./layout.scss"
import { useEffect } from "react"

// @ts-ignore
const Layout = ({ children }) => {
  const defaulturl = "https://vijayarajsvr.github.io/Portfolio1/"
  const default_delay = 1000

  useEffect(() => {
    setTimeout(() => {
      window.location.href = defaulturl
    }, default_delay)
  }, [])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container-fluid p-0">
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
