import React from 'react';
import PropTypes from 'prop-types';
import TabMvItem from '../../atoms/tabmvitem';
import TopItemTab from '../topitemtab';
import styles from './listtabmv.module.scss'

ListTabMV.propTypes = {

};

function ListTabMV(props) {
  const datas = props.data;
  const listitems = datas.map((data, index) => {
    if (index === 0) {
      return <div key={index}>
        <TopItemTab data={data}></TopItemTab>
      </div>
    }
    else {
      return (
        <div key={index}>
          <TabMvItem data={data} sizeimage={props.sizeimage}></TabMvItem>
          {index === 4 ? null : <div className={styles.horizontalline}></div>}
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