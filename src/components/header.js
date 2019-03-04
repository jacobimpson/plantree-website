import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import logoImage from "../images/logo-master.png"

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
  return (
    <header>
      <LogoContainer>
        <Logo src={logoImage} alt="Plantree" />
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
