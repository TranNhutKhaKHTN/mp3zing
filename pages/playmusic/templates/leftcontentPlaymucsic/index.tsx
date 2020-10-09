import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImgSong from '../../../home/atoms/ImgSong';
import { CaretRightOutlined, PauseOutlined, EllipsisOutlined, HeartOutlined } from "@ant-design/icons"
import styles from './leftcontent.module.scss'


const LeftContentPlayMucsic: React.FC = (props) => {
  const [roll, setRoll] = useState(false);

  const clickBtn = () => {
    const quay = !roll;
    setRoll(quay)
  }
  return (
    <div className={styles.content}>
      <div className={roll ? styles.imgsongroll : styles.imgsong}>
        <ImgSong size="XLL"></ImgSong>
      </div>
      <div className={styles.title}>
        <b>Radio Hoa Hải Đường</b>
      </div>

      <button onClick={clickBtn} className={styles.button}>{roll ? <PauseOutlined /> : <CaretRightOutlined />} Phát tất cả</button>
      <div style={{ color: "#AEAEAE" }}>50 bài hát 3 giờ 42 phút</div>
      <div className={styles.icon}>
        <div className={styles.iconitem}>
          <HeartOutlined />
        </div>
        <div className={styles.iconitem}>
          <EllipsisOutlined />
        </div>
      </div>
    </div>
  );
}

export default LeftContentPlayMucsic;