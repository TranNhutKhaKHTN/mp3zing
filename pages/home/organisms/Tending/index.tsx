import React from 'react';
// import PropTypes from 'prop-types';
// import TendingItem from '../../atoms/cartsong';
// import CardSong from '../../atoms/cardsong';
// import TendItem from '../../molecules/TendItem';
import InforTend from '../../atoms/InforTend';
import TendItem from '../../molecules/TendItem';
import styles from './tending.module.scss'

const Tending: React.FC = (props) => {
  const listTend = [
    {
      index: 1,
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/a/8/6/2/a8626a5671f5a01250a074c4c8140cae.jpg",
      singer: "Jack",
      song: "Hoa Hải Đường"
    },
    {
      index: 2,
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/f/8/1/e/f81efd92fa9a3d52eb37f3b867ab9d32.jpg",
      singer: "Quân A.P",
      song: "Bông Hoa Đẹp Nhất"
    },
    {
      index: 3,
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/2/d/7/d/2d7d033ca7c2a381748e7fb9dc6aa186.jpg",
      singer: "Anh Quân Idol",
      song: "Anh Mệt Rồi"
    },
    {
      index: 4,
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/0/1/5/1/0151bcc5dc64312a9b6d9d2245aab54c.jpg",
      singer: "K-ICM, APJ",
      song: "Ai Mang Cô Đơn Đi"
    },
    {
      index: 5,
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/8/3/6/9/83690ac46c2ba7cf46b153e6226c974d.jpg",
      singer: "Quang Đăng Trần",
      song: "Đánh Mất Em"
    }
  ];

  const listItem = listTend.map((data, index) => {
    return (
      <div key={index}>
        <TendItem data={data}></TendItem>
        {index === 4 ? null : <div className={styles.horizontalline}></div>}
      </div>
    )
  })
  return (
    <div className={styles.listend}>
      {listItem}
    </div >
  );
}

export default Tending;