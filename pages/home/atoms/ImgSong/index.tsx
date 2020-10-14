import React from 'react';
import PropTypes from 'prop-types';
import styles from './imgsong.module.scss'
import { PlayCircleOutlined } from '@ant-design/icons'

type Props = {
  image?: string,
  data?: any,
  singer?: any,
  size?: string,
}

const ImgSong: React.FC<Props> = (props) => {
  let img: string;
  const data = props.data;

  if (data) {
    img = data.image;
  }
  else {
    img = "https://upload.wikimedia.org/wikipedia/vi/3/32/S%C6%A1n_T%C3%B9ng_M-TP_-_C%C3%B3_ch%E1%BA%AFc_y%C3%AAu_l%C3%A0_%C4%91%C3%A2y.jpg"
  }
  // const type = props.type;
  let size: string;
  let sizeIcon: number;
  let icon: any;
  icon = <PlayCircleOutlined className={styles.icon}></PlayCircleOutlined>
  if (props.singer) {
    icon = <div className={styles.icon} style={{ fontSize: 14 }}>{props.singer}</div>
  }
  // if (props.size === "M") {
  //   size = styles.M;
  //   sizeIcon = 20
  // }
  // if (props.size === "S") {
  //   size = styles.S;
  // }
  // if (props.size === "L") {
  //   size = styles.L;
  // }
  // if (props.size === "XL") {
  //   size = styles.XL;
  // }
  // if (props.size === "XXL") {
  //   size = styles.XXL;

  // }
  // if (props.size === "ML") {
  //   size = styles.ML;

  // }
  // if (props.size === "Smallrectangle") {
  //   size = styles.Smallrectangle;
  // }
  // if (props.size === "RaM") {
  //   size = styles.RaM;
  // }
  // if (props.size === "RaL") {
  //   size = styles.RaL;
  // }
  // if (props.size === "XLL") {
  //   size = styles.XLL;
  // }

  switch (props.size) {
    case "S":
      size = styles.S
      break
    case "M":
      size = styles.M
      break
    case "L":
      size = styles.L
      break
    case "XL":
      size = styles.XL
      break
    case "XXL":
      size = styles.XXL
      break
    case "ML":
      size = styles.ML
      break
    case "Smallrectangle":
      size = styles.Smallrectangle
      break
    case "RaM":
      size = styles.RaM
      break
    case "RaL":
      size = styles.RaL
      break
    case "XLL":
      size = styles.XLL
      break
    case "C":
      size = styles.C
      break
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