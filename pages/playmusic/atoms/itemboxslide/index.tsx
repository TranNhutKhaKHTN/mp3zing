import React from 'react';
import ImgSong from '../../../home/atoms/ImgSong';
import styles from './itemboxslide.module.scss';

interface boxslide {
  image: string;
  title: string;
}

type Props = {
  data: boxslide
}

const ItemBoxSlide: React.FC<Props> = (props: Props) => {
  const data = props.data
  return (
    <div>
      <div className={styles.imgsong}>
        <ImgSong size="XL" data={data}></ImgSong>
      </div>
      <div>{data.title}</div>
    </div>
  );
}

export default ItemBoxSlide;