/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

const FooterImage = styled.img`
  margin: 0;
  padding: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: -1;
  opacity: 0.2;
  width: 100%;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        footerImage: imageSharp(
          id: { eq: "2f605a69-9aaa-5218-88b6-d51d5b84d1f0" }
        ) {
          resize(width: 1600) {
            tracedSVG
          }
        }
      }
    `}
    render={data => (
      <>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 720,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <footer>© {new Date().getFullYear()} Jacob Impson</footer>
        </div>
        <FooterImage src={data.footerImage.resize.tracedSVG} alt="" />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
