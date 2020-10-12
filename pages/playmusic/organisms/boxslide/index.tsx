import React from 'react';
import ListItemBoxSlide from '../../molecules/listItemBoxslide';
import styles from './boxslide.module.scss'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface boxslide {
  image: string;
  title: string;
}
type Props = {
  data: boxslide[],
  title: string
}

const BoxSlide: React.FC<Props> = (props) => {
  const data = props.data;
  const title = props.title
  return (
    <div className={styles.boxslide}>
      <div className={styles.title}>
        <b>{title}</b>
        <div className={styles.gricon}>
          <LeftOutlined />
          <RightOutlined />
        </div>
      </div>
      <div>
        <ListItemBoxSlide data={data}></ListItemBoxSlide>
      </div>
    </div>
  );
}

export default BoxSlide;