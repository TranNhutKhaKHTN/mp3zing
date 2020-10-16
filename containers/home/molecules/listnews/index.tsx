import React from 'react';
import TopNews from '../../atoms/topnews';
import NewItem from '../../atoms/newsitem';
import styles from './listnews.module.scss'

const ListNews: React.FC = () => {
  const datas = [
    {
      image: "https://znews-photo.zadn.vn/w480/Uploaded/wyhktpu/2020_09_17/Gil_2.jpg",
      title: "Gil Lê tiến bộ rõ rệt trong sản phẩm mới"
    },
    {
      image: "https://znews-photo.zadn.vn/w480/Uploaded/wyhktpu/2020_09_16/LKC_THUMB.jpg",
      title: "Liz Kim Cương tìm được ‘chìa khóa tạo hit’"
    },
    {
      image: "https://znews-photo.zadn.vn/w480/Uploaded/wyhktpu/2020_09_16/thumb.jpg",
      title: "Dòng nhạc mang âm hưởng dân gian phủ sóng Vpop"
    },
    {
      image: "https://znews-photo.zadn.vn/w480/Uploaded/wyhktpu/2020_09_09/QUAN_AP_THUMB.jpg",
      title: "‘Bông hoa đẹp nhất’ của Quân A.P đạt top 1 #zingchart sau 5 tiếng"
    },
    {
      image: "https://znews-photo.zadn.vn/w480/Uploaded/izhqv/2020_09_05/vie_channel_photos_rap_viet_7_15949586078351950074304_527_0_1464_1500_crop_15949587089441936445285.jpg",
      title: "Rap đang chiếm lĩnh thị trường nhạc Việt?"
    }
  ]

  const topnews = datas.map((data, index) => {
    return <div key={index}>
      <NewItem data={data}></NewItem>
      {index === 4 ? null : <div className={styles.horizontalline}></div>}
    </div>
  })
  return (
    <div>
      <TopNews />
      <div className={styles.horizontalline}></div>
      {topnews}
    </div>
  );
}

export default ListNews;