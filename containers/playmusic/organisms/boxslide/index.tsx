import React, { useRef, useState } from 'react';
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
  const carousel = useRef(null);
  const changeLeft = () => {
    // console.log("left");
    const i = curentSlide;
    if (i > 0) {
      carousel.current.prev();
      setCurentSlide(i - 1);
    }
  }

  const changeRight = () => {
    // console.log("right");
    const i = curentSlide;
    if (i < 3) {
      carousel.current.next()
      setCurentSlide(i + 1)
    }

  }

  //có thể làm slide bằng react slick
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
        <Carousel dots={false} ref={carousel}>
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
            <ListItemBoxSlide data={data} />
          </div>
        </Carousel>

      </div>
    </div>
  );
}

export default BoxSlide;