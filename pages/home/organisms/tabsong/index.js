import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import styles from './tab.module.scss'
import ListTabSong from '../../molecules/listtabsong';

TabSong.propTypes = {

};

function TabSong(props) {
  const { TabPane } = Tabs
  const tab1 = <div className={styles.tabname}>Việt Nam</div>
  const tab2 = <div className={styles.tabname}>US/UK</div>
  const tab3 = <div className={styles.tabname}>K-Pop</div>

  const data1 = [
    {
      rank: 1,
      song: "Hoa Hải Đường",
      singer: "Jack",
      image: "",
      watch: 1111
    },
    {
      rank: 2,
      song: "Bông Hoa Đẹp Nhất",
      singer: "Quân A.P",
      image: "",
      watch: 2011
    },
    {
      rank: 3,
      song: "Ai Mang Cô Đơn Đi",
      singer: "K-ICM, APJ",
      image: "",
      watch: 1970
    },
    {
      rank: 4,
      song: "Đánh Mất Em",
      singer: "Quang Đăng Trần",
      image: "",
      watch: 1929
    },
    {
      rank: 5,
      song: "Bỏ Lỡ Một Người",
      singer: "Lê Bảo Bình",
      image: "",
      watch: 1887
    },
    {
      rank: 6,
      song: "Em Bé",
      singer: "AMEE, Karik",
      image: "",
      watch: 1846
    },
    {
      rank: 7,
      song: "Anh Mệt Rồi",
      singer: "Anh Quân Idol",
      image: "",
      watch: 1805
    },
    {
      rank: 8,
      song: "Khác Biệt",
      singer: "Khắc Việt",
      image: "",
      watch: 1764
    },
    {
      rank: 9,
      song: "Khác Biệt To Lớn",
      singer: "Trịnh Thăng Bình, Liz Kim Cương",
      image: "",
      watch: 1723
    },
    {
      rank: 10,
      song: "Chẳng Thể Giữ Lấy Chẳng Đành Buông Tay",
      singer: "Trịnh Thăng Bình, Liz Kim Cương",
      image: "",
      watch: 1682
    }
  ]
  return (
    <div className={styles.tab}>
      <div className={styles.title}>
        #ZINGCHART TUẦN - BÀI HÁT
      </div>
      <Tabs type="card">
        <TabPane tab={tab1} key="1" className={styles.tabitem}>
          <ListTabSong data={data1}></ListTabSong>
        </TabPane>
        <TabPane tab={tab2} key="2">
          <ListTabSong data={data1}></ListTabSong>
        </TabPane>
        <TabPane tab={tab3} key="3">
          <ListTabSong data={data1}></ListTabSong>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default TabSong;