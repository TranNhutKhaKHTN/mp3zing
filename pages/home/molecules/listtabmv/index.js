import React from 'react';
import PropTypes from 'prop-types';
import TabMvItem from '../../atoms/tabmvitem';
import TopItemTab from '../topitemtab';

ListTabMV.propTypes = {

};

function ListTabMV(props) {
  return (
    <div>
      <TopItemTab></TopItemTab>
      <TabMvItem></TabMvItem>
      <hr></hr>
      <TabMvItem></TabMvItem>
      <hr></hr>
      <TabMvItem></TabMvItem>
      <hr></hr>
      <TabMvItem></TabMvItem>
      <hr></hr>
      <TabMvItem></TabMvItem>

    </div>
  );
}

export default ListTabMV;