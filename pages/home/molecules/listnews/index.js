import React from 'react';
import PropTypes from 'prop-types';
import TopNews from '../../atoms/topnews';
import NewItem from '../../atoms/newsitem';

ListNews.propTypes = {

};

function ListNews(props) {
  return (
    <div>
      <TopNews></TopNews>
      <NewItem></NewItem>
      <NewItem></NewItem>
      <NewItem></NewItem>
      <NewItem></NewItem>
      <NewItem></NewItem>
      <NewItem></NewItem>
    </div>
  );
}

export default ListNews;