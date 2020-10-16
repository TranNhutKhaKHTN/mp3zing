import React from 'react';
import TopBar from '../../organisms/topbar';
import Menubar from '../../organisms/menubar';

const Header: React.FC = () => {
  return (
    <div>
      <TopBar />
      <Menubar />
    </div>
  );
}

export default Header;