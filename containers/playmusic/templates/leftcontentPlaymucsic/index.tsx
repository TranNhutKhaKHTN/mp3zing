import React, { useState } from 'react';
import ImgSong from '../../../../containers/home/atoms/ImgSong';
import { CaretRightOutlined, PauseOutlined, EllipsisOutlined, HeartOutlined } from "@ant-design/icons"
import styles from './leftcontent.module.scss'


const LeftContentPlayMucsic: React.FC = () => {
  const [roll, setRoll] = useState(false);

  const clickBtn = () => {
    const quay = !roll;
    setRoll(quay)
  }

  const dataleftcontent = {
    image: "https://photo-playlist-zmp3.zadn.vn/radio?src=HavwqN7EzbiAHZUTDj-sJ40CDyesrRORLmWgdM_MiXe7ModBRe6rJWSBAybgWx4Q2rahcZ7Ju0G2I2cMTu7pGrOUVyajlRuOL1xn4gwSVsPdiM4tXSUXu29z&size=thumb/240_240"
  }

  return (
    <div className={styles.content}>
      <div className={roll ? styles.imgsongroll : styles.imgsong}>
        <ImgSong size="XLL" data={dataleftcontent}></ImgSong>
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