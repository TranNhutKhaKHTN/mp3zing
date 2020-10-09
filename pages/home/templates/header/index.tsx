import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../../organisms/topbar';
import Menubar from '../../organisms/menubar';

Header.propTypes = {

};

function Header(props: any) {
  return (
    <div>
      <TopBar></TopBar>
      <Menubar></Menubar>
    </div>
  );
}

export default Header;