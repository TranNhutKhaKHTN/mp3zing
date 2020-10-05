import React from 'react';
import PropTypes from 'prop-types';
import logo from './../../../../public/logo.png'
import { Button, Layout, Menu } from 'antd';
import styles from './topbar.module.scss'
import SearchTool from '../../molecules/searchtool';

TopBar.propTypes = {

};
function TopBar(props) {
  const { Header } = Layout;
  return (
    <div>
      <Header style={{ height: 50 }}>
        <div className={styles.header}>
          <img src={logo}></img>
          <Menu theme="dark" mode="horizontal" className={styles.menu} defaultSelectedKeys={['2']}>
            <SearchTool></SearchTool>
            <Menu.Item key="1">MP3</Menu.Item>
            <Menu.Item key="2">NEW</Menu.Item>
            <Menu.Item key="3">TV</Menu.Item>
            <Menu.Item key="4">ZALO PC</Menu.Item>
          </Menu>
          <div style={{ color: 'white', marginLeft: 100 }}>Đăng nhập</div>
        </div>
      </Header>
    </div>
  );
}

export default TopBar;