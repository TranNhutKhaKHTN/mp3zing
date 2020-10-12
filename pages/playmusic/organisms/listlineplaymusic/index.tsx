import React from 'react';
import PropTypes from 'prop-types';
import LineMusicPlay from '../../molecules/linemusicplay';
import styles from './listlineplaymusic.module.scss'
import { type } from 'os';
interface LineMusic {
  image: string;
  song: string;
  singer: string;
  rank: number;
}
type Props = {
  data: LineMusic[]
}

const ListLinePlayMusic: React.FC<Props> = (props) => {
  const datas = props.data;
  const listLine = datas.map((data, index) => {
    return (
      <div key={index}>
        <LineMusicPlay data={data}></LineMusicPlay>
        <div className={styles.horizontalline}></div>
      </div>
    )
  })
  return (
    <div>
      {listLine}
    </div>
  );
}

export default ListLinePlayMusic;