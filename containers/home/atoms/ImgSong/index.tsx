import React from 'react';
import styles from './imgsong.module.scss'
import { PlayCircleOutlined } from '@ant-design/icons'
import { Data } from '@containers/interface/interface'
import LazyLoad from 'react-lazyload'
import Link from 'next/link';

type Props = {
  image?: string,
  data?: Data,
  singer?: string,
  size?: string,
}

const ImgSong: React.FC<Props> = (props: Props) => {
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
  // let sizeIcon: number;
  // let icon: any;
  // icon = <PlayCircleOutlined className={styles.icon}></PlayCircleOutlined>
  // if (props.singer) {
  //   icon = <div className={styles.icon} style={{ fontSize: 14 }}>{props.singer}</div>
  // }

  // sửa lại thành lookup map
  switch (props.size) {
    case "SS":
      size = styles.SS
      break
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
    <Link href="/playmusic">
      <div className={size}>
        <div className={styles.imgsong}>
          <LazyLoad placeholder="loading" hieght={200} ><img className={styles.img} src={img}></img></LazyLoad>
          <div className={styles.opacity} >
            {
              props.singer ?
                <div className={styles.icon} style={{ fontSize: 14 }}>{props.singer}</div>
                : <PlayCircleOutlined className={styles.icon} />
            }
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ImgSong;