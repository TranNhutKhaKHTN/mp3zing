import React from 'react';
import PropTypes from 'prop-types';
import styles from './imgsong.module.scss'
import { PlayCircleOutlined } from '@ant-design/icons'

ImgSong.propTypes = {

};

function ImgSong(props) {
  let img;
  if (props.src) {
    img = props.src;
  }
  else {
    img = "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/f/8/1/e/f81efd92fa9a3d52eb37f3b867ab9d32.jpg"
  }
  // const type = props.type;
  let size;
  let sizeIcon;
  console.log(props.size);
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
  return (
    <div className={size}>
      <div className={styles.imgsong}>
        <img className={styles.img} src={img}></img>
        <div className={styles.opacity} >
          <PlayCircleOutlined className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export default ImgSong;