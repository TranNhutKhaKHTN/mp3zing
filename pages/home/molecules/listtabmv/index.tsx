import React from 'react';
import PropTypes from 'prop-types';
import TabMvItem from '../../atoms/tabmvitem';
import TopItemTab from '../topitemtab';
import styles from './listtabmv.module.scss'

interface tabMV {
  rank: number;
  image: string;
  song: string;
  singer: string;
  watch: number;
}

type Props = {
  data: tabMV[],
  sizeimage?: string
}

const ListTabMV: React.FC<Props> = (props) => {
  const datas = props.data;
  const listitems = datas.map((data, index) => {
    if (index === 0) {
      return <div key={index}>
        <TopItemTab data={data}></TopItemTab>
        <div className={styles.horizontalline}></div>
      </div>
    }
    else {
      return (
        <div key={index}>
          <TabMvItem data={data} sizeimage={props.sizeimage}></TabMvItem>
          <div className={styles.horizontalline}></div>
        </div>
      )
    }
  })
  return (
    <div>
      {listitems}
    </div>
  );
}

export default ListTabMV;