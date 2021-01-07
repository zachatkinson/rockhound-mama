import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"



import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#001C14`,
      marginBottom: `0`,
    }}
    className={`store-header`}
  >

            <div className={`menu-button`}>
                Menu Button
            </div>
            <div className={`header-logo`}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                <Logo logoType={`initials`} />
                </Link>
            </div>
            <div className={`cart-button`}>
                Cart Button
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
