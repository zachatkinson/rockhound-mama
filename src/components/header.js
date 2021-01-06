import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import MamaCart from "./shopify/utils/cartInfo";


import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#323233`,
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
                <Logo />
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
