import React from 'react';
import ItemBoxSlide from '@containers/playmusic/atoms/itemboxslide';
import styles from "./listitemboxslide.module.scss"

interface boxslide {
  image: string;
  title: string;
}
type Props = {
  data: boxslide[],
}

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