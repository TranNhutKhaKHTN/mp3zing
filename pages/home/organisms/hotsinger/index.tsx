import React from 'react';
import PropTypes from 'prop-types';
import ImgSong from '../../atoms/ImgSong';
import styles from './hotsinger.module.scss'



const HotSinger: React.FC = (props) => {
  const hotsingers = [
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/8/b/4/c/8b4c040a3f0a64672e8dad7078aff3d1.jpg#home_hotartist_01",
      singer: "Hoàng Sơn"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/6/8/7/e687a5d265bd19b32da2fc5084e4314c.jpg#home_hotartist_02",
      singer: "Chi Dân"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/9/a/e/5/9ae5c75c89064613a294f0de98bcad64.jpg#home_hotartist_03",
      singer: "Châu Khải Phong"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/2/9/29f2a9818616b31bb362a31103113bdf_1509952097.jpg#home_hotartist_04",
      singer: "Khởi My"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/c/1/4/0/c140ebb6799391799b29a8eabae217f5.jpg#home_hotartist_05",
      singer: "Đạt G"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/6/2/4/9/62498fa513ccd6abdd5a373117353e16.jpg#home_hotartist_06",
      singer: "Chi Pu"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/5/a/5a04638d243f979ff8df0df40d8f7256_1515217779.jpg#home_hotartist_06",
      singer: "Orange"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg#home_hotartist_07",
      singer: "Mr Siro"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/7/d/7d108db512f6a6a929cd0d0ad3b593e8_1511431730.jpg#home_hotartist_09",
      singer: "Đang Nguyên"
    }
  ]
  const big = hotsingers[0]
  const list = hotsingers.map((data, index) => {
    if (index > 0) {
      return (
        <div key={index}>
          <ImgSong data={data} size="ML" singer={data.singer}></ImgSong>
        </div>
      )
    }
  })
  return (
    <div>
      <div className={styles.title}>
        NGHỆ SĨ HOT
      </div>
      <div className={styles.hotsinger}>
        <div className={styles.left}>
          <ImgSong size="XXL" data={big} singer={big.singer}></ImgSong>
        </div>
        <div className={styles.right}>
          {list}
        </div>
      </div>
    </div>
  );
}

export default HotSinger;