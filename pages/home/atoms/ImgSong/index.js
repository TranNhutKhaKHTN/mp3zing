import React from 'react';
import PropTypes from 'prop-types';
import styles from './imgsong.module.scss'
import { PlayCircleOutlined } from '@ant-design/icons'

ImgSong.propTypes = {

};

function ImgSong(props) {
  let img;
  const data = props.data;
  if (data) {
    img = data.image;
  }
  else {
    img = "https://upload.wikimedia.org/wikipedia/vi/3/32/S%C6%A1n_T%C3%B9ng_M-TP_-_C%C3%B3_ch%E1%BA%AFc_y%C3%AAu_l%C3%A0_%C4%91%C3%A2y.jpg"
  }
  // const type = props.type;
  let size;
  let sizeIcon;
  let icon;
  icon = <PlayCircleOutlined className={styles.icon}></PlayCircleOutlined>
  if (props.singer) {
    icon = <div className={styles.icon} style={{ fontSize: 14 }}>{props.singer}</div>
  }

  if (props.size === "M") {
    size = styles.M;
    sizeIcon = 20
  }
  if (props.size === "S") {
    size = styles.S;
  }
  if (props.size === "L") {
    size = styles.L;
  }
  if (props.size === "XL") {
    size = styles.XL;
  }
  if (props.size === "XXL") {
    size = styles.XXL;

  }
  if (props.size === "ML") {
    size = styles.ML;

  }
  if (props.size === "Smallrectangle") {
    size = styles.Smallrectangle;
  }

  return (
    <div className={size}>
      <div className={styles.imgsong}>
        <img className={styles.img} src={img}></img>
        <div className={styles.opacity} >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default ImgSong;