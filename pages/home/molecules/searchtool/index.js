import React from 'react';
import PropTypes from 'prop-types';
import styles from './searchtool.module.scss'
import Search from 'antd/lib/input/Search';

SearchTool.propTypes = {

};

function SearchTool(pSearchToolrops) {
  return (
    <div className={styles.search}>
      <Search placeholder="input search text" enterButton />
    </div>
  );
}

export default SearchTool;