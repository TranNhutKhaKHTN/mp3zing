import React from 'react';
import zalo from './../../../public/zalo.png'
import styles from './headerlogin.module.scss'

const HeaderLogin: React.FC = () => {
  return (
    <div className={styles.headerLogin}>
      <img src={zalo} />
      <div className={styles.titleLogin}>Đăng nhập bằng tài khoảng Zalo</div>
      <div style={{ fontSize: 20 }}><b>zingmp3.vn</b></div>
    </div>
  );
}

export default HeaderLogin;