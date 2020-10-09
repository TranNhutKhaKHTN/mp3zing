import React from 'react';
import lgfooter from './../../../../public/lgfooter.png'
import rfooter from './../../../../public/rfooter.png'
import styles from './footer.module.scss'

const Footer: React.FC = (props) => {
  const logo = "https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/icon_zing_mp3_60.png"
  return (
    <div className={styles.footer}>
      <div className={styles.footerinfor}>
        <div>
          <img src={lgfooter}></img>
        </div>
        <div className={styles.center}>
          <ul>
            <div>Giới thiệu</div>
            <div>Copyright</div>
            <div>APIs</div>
          </ul>
          <ul>
            <div>Điều khoản</div>
            <div>Zing MP3 VIP</div>
            <div>liên hệ</div>
          </ul>
          <ul>
            <div>Quảng cáo</div>
            <div>Ứng dụng</div>
          </ul>
          <ul>
            <div>FAQs</div>
            <div>Góp ý</div>
          </ul>
        </div>
        <div>
          <img src={rfooter}></img>
        </div>
      </div>
    </div>
  );
}

export default Footer;