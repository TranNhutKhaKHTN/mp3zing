import { LockFilled } from '@ant-design/icons';
import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import React from 'react';
import styles from './formlogin.module.scss'

type dataFormLogin = {
  userName: string;
  passWord: string;
}

const FormLogin: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<dataFormLogin>()

  const onSubmit = (data: dataFormLogin) => {
    console.log(data);
    window.close();
  }
  return (
    <div className={styles.formlogin}>
      <form style={{ width: "90%" }} onSubmit={handleSubmit(onSubmit)}>

        <div className={styles.lineInputlogin}>
          <div>
            <span>icon</span>
            <span>+84 </span>
          </div>
          <input placeholder="Số điện thoại" name="userName" ref={register({ required: true })}></input>

        </div>
        <div className={styles.errorMess}>*{errors.userName && "username is required"}</div>

        <div className={styles.lineInputlogin}>
          <LockFilled />
          <input type="password" placeholder="Mật khẩu" name="passWord" ref={register({ required: true })}></input>
        </div>
        <div className={styles.errorMess}>*{errors.passWord && "pasword is required"}</div>

        <div className={styles.grbutton}>f
          <Button type="primary" htmlType="submit" className={styles.btnlogin}>Đăng nhập với mật khẩu</Button>
          <Button className={styles.btnlogin} style={{ marginTop: 10 }}>Gửi yêu cầu đăng nhập</Button>
        </div>
        <div className={styles.forgetpassword}>
          <span>Quên mật khẩu?</span>
        </div>
      </form>
    </div>
  );
}

export default FormLogin;