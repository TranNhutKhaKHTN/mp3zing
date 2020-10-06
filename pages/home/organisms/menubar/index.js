import React from 'react';
import PropTypes from 'prop-types';
import styles from './menubar.module.scss'
import { HomeOutlined, PoweroffOutlined, CloudUploadOutlined } from '@ant-design/icons'
import ZingChart from '../../molecules/zingchart';

Menubar.propTypes = {

};

function Menubar(props) {
  return (
    <div className={styles.menu}>
      <div className={styles.items}>
        <ul>
          <span><HomeOutlined /></span>
          <div className={styles.item}>
            <div>
              Nhạc Cá Nhân
            </div>
          </div>
          <div>
            |
          </div>
          <div className={styles.item}>
            <div>
              #zingchart
            </div>
            <span className={styles.dropdow}><ZingChart></ZingChart></span>
          </div>

          <div className={styles.item}>
            <div>
              Top 100
           </div>
          </div>

          <div className={styles.item}>
            <div>
              Chủ Đề
            </div>
          </div>
          <div className={styles.item}>
            <div>
              Video
            </div>
          </div>
          <div className={styles.item}>
            <div>
              Album
            </div>
          </div>
          <div className={styles.item}>
            <div>
              Nghệ Sĩ
            </div>
          </div>
          <div className={styles.item}>
            <div>
              VIP
            </div>
          </div>
        </ul>

        <div>
          <PoweroffOutlined style={{ fontSize: 16, marginRight: 10 }} />
           Tắt quảng cáo
          <CloudUploadOutlined style={{ fontSize: 18, marginLeft: 10 }} />
        </div>
      </div>
    </div>
  );
}

export default Menubar;