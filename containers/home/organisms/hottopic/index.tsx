import React from 'react';
import styles from "./hottopic.module.scss"
import Topic from '../../atoms/topic';

const HotTopic: React.FC = () => {
  const datas = [
    {
      image: "https://photo-zmp3.zadn.vn/cover/6/0/8/d/608d6474b6daa5563eb5c088ca08cc98.jpg"
    },
    {
      image: "https://photo-zmp3.zadn.vn/cover/5/3/8/0/53801ebaa05e57320f06954927896a69.jpg"
    },
    {
      image: "https://photo-zmp3.zadn.vn/covers/2/a/2ac9d9aa479519e1724db5b860373578_1499827968.jpg"
    },
    {
      image: "https://photo-zmp3.zadn.vn/cover/7/c/9/5/7c95f7f7eb049f6d635df1df7a8c7284.jpg"
    },
    {
      image: "https://photo-zmp3.zadn.vn/covers/d/0/d0f7e500d9a338062095f7f66ed669ff_1516330401.jpg"
    }
  ]
  const topics = datas.map((data, index) => {
    return <Topic key={index} data={data} />
  })
  return (
    <div className={styles.hottopic}>
      <div className={styles.title}>
        CHỦ ĐỀ HOT
      </div>
      {topics}
      <div className={styles.addition}>
        xem thêm chủ đề khác
      </div>
    </div>
  );
}

export default HotTopic;