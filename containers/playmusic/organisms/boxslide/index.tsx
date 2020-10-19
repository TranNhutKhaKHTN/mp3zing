import React, { useState } from 'react';
import ListItemBoxSlide from '../../molecules/listItemBoxslide';
import styles from './boxslide.module.scss'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';

interface boxslide {
  image: string;
  title: string;
}
type Props = {
  data: boxslide[],
  title: string
}

const BoxSlide: React.FC<Props> = (props: Props) => {
  const data = props.data;
  const title = props.title;
  const [curentSlide, setCurentSlide] = useState(0)
  const changeLeft = () => {
    console.log("left");

    let i = curentSlide - 1;
    if (i < 0) {
      i = 0;
    }
    console.log(i);

    setCurentSlide(i)
  }

  const changeRight = () => {
    console.log("right");
    let i = curentSlide + 1;
    if (i > 2) {
      i = 2;
    }
    console.log(i);
    setCurentSlide(i)
  }
  return (
    <div className={styles.boxslide}>
      <div className={styles.title}>
        <b>{title}</b>
        <div className={styles.gricon}>
          <LeftOutlined className={styles.icon} onClick={changeLeft} />
          <RightOutlined className={styles.icon} onClick={changeRight} />
        </div>
      </div>
      <div>
        <Carousel dots={true}>
          <div>
            <ListItemBoxSlide data={data} />
          </div>
          <div>
            <ListItemBoxSlide data={data} />
          </div>
          <div>
            <ListItemBoxSlide data={data} />
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>

      </div>
    </div>
  );
}

export default BoxSlide;