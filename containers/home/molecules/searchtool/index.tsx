import React, { useRef } from 'react';
import styles from './searchtool.module.scss'
import Search from 'antd/lib/input/Search';
import { addKeyWord } from '@redux/actions/search'
import { useDispatch } from 'react-redux'
import SearchResult from '@containers/searchResult';


const SearchTool: React.FC = () => {
  const refTimeOut = useRef(null)
  const dispatch = useDispatch();

  const searchMusic = (event) => {
    // e.stopImmediatePropagation()
    event.preventDefault()
    const keyword = event.target.value;
    if (refTimeOut.current) {
      clearTimeout(refTimeOut.current)
    }

    refTimeOut.current = setTimeout(() => {
      const action = addKeyWord(keyword);
      dispatch(action);
    }, 300)
  }

  // const stopPropagation = (event) => {
  //   event.stopPropagation()
  // }

  return (
    <div className={styles.search}>
      <Search placeholder="input search text" onChange={searchMusic} enterButton />
      <div>
        <SearchResult></SearchResult>
      </div>
    </div>
  );
}

export default SearchTool;