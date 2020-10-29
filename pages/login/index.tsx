import React from 'react';
import HeaderLogin from '@containers/login/headerLogin';
import TabLogin from '@containers/login/tablogin';
import styles from './login.module.scss'

const Login: React.FC = () => {
  return (
    <div className={styles.login}>
      <HeaderLogin />
      <TabLogin />
      <div className={styles.logup}>Bạn chưa có tài khoản? Đăng ký ngay!</div>
    </div>
  );
}

export default Login;