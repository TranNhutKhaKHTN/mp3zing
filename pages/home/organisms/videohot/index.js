import React from 'react';
import PropTypes from 'prop-types';
import VideoHotItem from '../../molecules/videohotItem';
import styles from './videohot.module.scss'
import { RightOutlined } from '@ant-design/icons'

VideoHot.propTypes = {

};

function VideoHot(props) {
  return (
    <div className={styles.videohot}>
      <div className={styles.title}>
        VIDEO HOT 
        <RightOutlined />
      </div>
      <div className={styles.videohotitems}>
        <VideoHotItem></VideoHotItem>
        <VideoHotItem></VideoHotItem>
        <VideoHotItem></VideoHotItem>
        <VideoHotItem></VideoHotItem>
        <VideoHotItem></VideoHotItem>
        <VideoHotItem></VideoHotItem>
        <VideoHotItem></VideoHotItem>
        <VideoHotItem></VideoHotItem>
        <VideoHotItem></VideoHotItem>
        <VideoHotItem></VideoHotItem>
        <VideoHotItem></VideoHotItem>
        <VideoHotItem></VideoHotItem>
      </div>
    </div>
  );
}

export default VideoHot;