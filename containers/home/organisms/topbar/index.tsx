import React from 'react';
import logo from '@public/logo.png'
import { Layout, Menu } from 'antd';
import styles from './topbar.module.scss'
import SearchTool from '@containers/home/molecules/searchtool';
import { useRouter } from 'next/router';


const TopBar: React.FC = () => {
  const { Header } = Layout;
  const route = useRouter()
  const clickLogo = () => {
    route.push("/home")
  }

  const openLoginPage = () => {
    window.open("/login", "windowName", "height=970,width=600, top: 0, left:50%");
  }

  return (
    <div>
      <Header style={{ height: 50 }}>
        <div className={styles.header}>
          <img src={logo} onClick={clickLogo} style={{ cursor: "pointer" }}></img>
          <Menu theme="dark" mode="horizontal" className={styles.menu} defaultSelectedKeys={['2']}>
            <SearchTool></SearchTool>
            <Menu.Item key="1">MP3</Menu.Item>
            <Menu.Item key="2">NEW</Menu.Item>
            <Menu.Item key="3">TV</Menu.Item>
            <Menu.Item key="4">ZALO PC</Menu.Item>
          </Menu>
          <div className={styles.btnlogin} onClick={openLoginPage}>Đăng nhập</div>
        </div>
      </Header>
    </div>
  );
}

export default TopBar;