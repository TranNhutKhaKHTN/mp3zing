import { Tabs } from 'antd';
import React from 'react';
import FormLogin from '../formLogin';
import QRCode from '../QRcode';
import styles from './tablogin.module.scss'

const { TabPane } = Tabs
const TabLogin: React.FC = () => {
  return (
    <div className={styles.tablogin}>
      <Tabs centered>
        <TabPane tab="VỚI SỐ ĐIỆN THOẠI" key="1">
          <FormLogin />
        </TabPane>
        <TabPane tab="VỚI MÃ QR CODE" key="2">
          <QRCode />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default TabLogin;