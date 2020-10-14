import React from 'react';
import styles from './searchtool.module.scss'
import Search from 'antd/lib/input/Search';


const SearchTool: React.FC = () => {
  return (
    <div className={styles.search}>
      <Search placeholder="input search text" enterButton />
    </div>
  );
}

export default SearchTool;