import React from 'react';
import QRcode from './../../../public/QRCode.png'
import styles from './qrcode.module.scss'

const QRCode: React.FC = () => {
  return (
    <div className={styles.qrcode}>
      <img src={QRcode} />
    </div>
  );
}

export default QRCode;