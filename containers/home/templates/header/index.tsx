import React from 'react';
import TopBar from '@containers/home/organisms/topbar';
import Menubar from '@containers/home/organisms/menubar';
// import SearchResult from '@containers/searchResult';

const Header: React.FC = () => {
  return (
    <div>
      <TopBar />
      <Menubar />
    </div>
  );
}

export default Header;