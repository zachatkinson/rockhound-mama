import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Cart from "./shopify/cart/cart"
import SVGLogo from "../svg/rhm-logomark_thin.svg"
import Search from "./search/search";


const Header = ({ siteTitle }) => (
  <header
    style={{
        background: `#ffffff`,
        marginBottom: `0`,
        padding: `1rem`,
    }}
    className={`store-header`}
  >


            <div className={`header-logo`}>
                <Link
                    aria-label={`Home Link`}
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                <SVGLogo />
                </Link>
            </div>
            <Search />
            <Link to={"/cart"}
                className={`cartLink`}
            >
            <Cart />
            </Link>
  </header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
