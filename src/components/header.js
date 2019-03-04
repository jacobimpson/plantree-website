import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Logo = styled.img`
  height: 3rem;
`

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem 0 1rem;
`

const Header = () => {
  const { imageSharp } = useStaticQuery(graphql`
    query ImageLogo {
      imageSharp(id: { eq: "5ae7ea25-f5ac-501c-9e21-2eec48cacfa3" }) {
        original {
          src
        }
      }
    }
  `)

  return (
    <header>
      <LogoContainer>
        <Logo src={imageSharp.original.src} alt="Plantree" />
      </LogoContainer>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
