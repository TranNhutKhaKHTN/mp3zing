import React from 'react';
import PropTypes from 'prop-types';
import Video from '../../atoms/video';
import styles from './videohotitem.module.scss'
import ImgSong from '../../atoms/ImgSong';

interface videoHot {
  image: string;
  song: string;
  singer: string;
}

type Props = {
  data: videoHot
}

const VideoHotItem: React.FC<Props> = (props) => {
  const data = props.data
  return (
    <div className={styles.videoitem}>
      <ImgSong size="RaL" data={data}></ImgSong>
      <div className={styles.title}>
        {data.song}
      </div>
      <div className={styles.singer}>
        {data.singer}
      </div>
    </div>
  );
}

export default VideoHotItem;