import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#323233`,
      marginBottom: `0`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
            <div className={`header-logo`}>
                <Logo />
            </div>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
