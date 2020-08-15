import React from 'react';
import PropTypes from 'prop-types';
import Header from '../organisms/Header';

const HeaderTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

HeaderTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderTemplate;
