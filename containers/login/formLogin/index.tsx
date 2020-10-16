import { LockFilled } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import styles from './formlogin.module.scss'

const FormLogin: React.FC = () => {
  return (
    <div className={styles.formlogin}>
      <form style={{ width: "90%" }}>
        <div className={styles.lineInputlogin}>
          <div>
            <span>icon</span>
            <span>+84 </span>
          </div>
          <input placeholder="Số điện thoại"></input>
        </div>
        <div className={styles.lineInputlogin}>
          <LockFilled />
          <input type="password" placeholder="Mật khẩu"></input>
        </div>
        <div className={styles.grbutton}>
          <Button type="primary" htmlType="submit" className={styles.btnlogin}>Đăng nhập với mật khẩu</Button>
          <Button className={styles.btnlogin}>Gửi yêu cầu đăng nhập</Button>
        </div>
        <div className={styles.forgetpassword}>
          <span>Quên mật khẩu?</span>
        </div>
      </form>
    </div>
  );
}

export default FormLogin;