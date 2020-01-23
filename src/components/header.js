import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const onClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header>
      <div className="border-b border-black-400 p-4 flex sm:items-center shadow sm:flex-row flex-col">
        <div className="flex items-center w-full sm:w-auto">
          <h1 className="flex-1 sm:flex-initial">
            <Link to="/" className="text-xl font-bold px-4 py-1 mx-1 hover:bg-gray-400 rounded-lg">
              {siteTitle}
            </Link>
          </h1>
          <button className="block sm:hidden px-2" onClick={onClick}><i className="material-icons">menu</i></button>
        </div>
        <div className={`flex items-center ${menuOpen ? 'block' : 'hidden'} sm:block`}>
          <Link to="/now" className="text-lg px-4 py-1 mx-1 hover:bg-gray-400 rounded-lg">now</Link>
          <Link to="/me" className="text-lg px-4 py-1 mx-1 hover:bg-gray-400 rounded-lg">me</Link>
          <Link to="/contact" className="text-lg px-4 py-1 mx-1 hover:bg-gray-400 rounded-lg">contact</Link>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
