import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Cart from "./shopify/cart/cart"
import SVGLogo from "../svg/rhm-logomark_thin.svg"

import {GiHamburgerMenu} from "react-icons/all";

const Header = ({ siteTitle }) => (
  <header
    style={{
        background: `#ffffff`,
        marginBottom: `0`,
        padding: `1rem`,
    }}
    className={`store-header`}
  >

            <div className={`menu-button`}>
                <GiHamburgerMenu size={`1.5rem`} />
            </div>
            <div className={`header-logo`}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                <SVGLogo />
                </Link>
            </div>
            <Cart />
  </header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
