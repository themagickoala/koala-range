import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({siteTitle}) => (
  <header
    style={{
      background: `purple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1.0875rem`,
      }}
    >
      <h1 style={{
        margin: `0 16px`,
        fontSize: `24px`,
        display: `inline-block`,
      }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h3 style={{
        margin: `0 16px`,
        fontSize: `18px`,
        display: `inline-block`,
      }}>
        <Link
          to="/blog"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          blog
        </Link>
      </h3>
      <h3 style={{
        margin: `0 16px`,
        fontSize: `18px`,
        display: `inline-block`,
      }}>
        <Link
          to="/now"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          now
        </Link>
      </h3>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
