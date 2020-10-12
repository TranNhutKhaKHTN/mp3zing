import React from 'react';
import PropTypes from 'prop-types';
import ItemBoxSlide from '../../atoms/itemboxslide';
import styles from "./listitemboxslide.module.scss"

interface boxslide {
  image: string;
  title: string;
}
type Props = {
  data: boxslide[],
}

const ListItemBoxSlide: React.FC<Props> = (props) => {
  const datas = props.data
  const listbox = datas.map((data, index) => {
    return (
      <ItemBoxSlide key={index} data={data}></ItemBoxSlide>
    )
  })
  return (
    <div className={styles.list}>

      {listbox}
    </div>
  );
}

export default ListItemBoxSlide;