import { Carousel } from 'antd';
import React from 'react';
import ItemBoxSlide from '../../atoms/itemboxslide';
import styles from "./listitemboxslide.module.scss"

interface boxslide {
  image: string;
  title: string;
}
type Props = {
  data: boxslide[],
}
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79"
};

const ListItemBoxSlide: React.FC<Props> = (props: Props) => {
  const datas = props.data
  const listbox = datas.map((data, index) => {
    return (
      <ItemBoxSlide key={index} data={data} />
    )
  })
  return (
    <div className={styles.list}>
      {listbox}
    </div>
  );
}

export default ListItemBoxSlide;