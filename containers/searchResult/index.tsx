// import ImgSong from '@containers/home/atoms/ImgSong';
import React, { useEffect, useState } from 'react';
import ListResult from './listResuilt';
import styles from './listresult.module.scss'
import { useSelector } from 'react-redux'

const fortmatString = (str) => {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str
    .normalize('NFD') // chuyển chuỗi sang unicode tổ hợp
    .replace(/[\u0300-\u036f]/g, ''); // xóa các ký tự dấu sau khi tách tổ hợp

  // Thay ký tự đĐ
  str = str.replace(/[đĐ]/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // Xóa ký tự - liên tiếp
  str = str.replace(/-+/g, '-');

  // xóa phần dư - ở đầu & cuối
  str = str.replace(/^-+|-+$/g, '');

  // return
  return str;
}

const SearchResult: React.FC = () => {
  const keyword = useSelector(state => state.search.keyword)
  const dataToSearch = useSelector(state => state.playmusic.dataPlayList)
  const [data, setData] = useState([])
  useEffect(() => {
    const result = [];
    // console.log(keyword);
    if (keyword === "") {
      setData([]); return
    }
    if (keyword) {
      dataToSearch.map((data) => {
        const song = fortmatString(data.song);
        const singer = fortmatString(data.singer);
        const key = fortmatString(keyword)
        if (song.indexOf(key) !== -1 || singer.indexOf(key) !== -1) {
          result.push(data)
        }
      })
      // console.log(result);
      setData(result)
    }



  }, [keyword])
  return (
    <>
      {data.length > 0 ? <div className={styles.listResult}>
        <ListResult data={data} />
      </div> : null}
    </>
  );
}

export default SearchResult;