import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import styles from './tabalbum.module.scss'
import ListTabSong from '../../molecules/listtabsong';
import ListTabMV from '../../molecules/listtabmv';

TabAlbum.propTypes = {

};

function TabAlbum(props) {
  const { TabPane } = Tabs
  const tab1 = <div className={styles.tabname}>Việt Nam</div>
  const tab2 = <div className={styles.tabname}>US/UK</div>
  const tab3 = <div className={styles.tabname}>K-Pop</div>
  return (
    <div className={styles.tab}>
      <div className={styles.title}>
        #ZINGCHART TUẦN - ALBUM
      </div>
      <Tabs type="card">
        <TabPane tab={tab1} key="1" className={styles.tabitem}>
          <ListTabMV></ListTabMV>
        </TabPane>
        <TabPane tab={tab2} key="2">
          <ListTabSong></ListTabSong>
        </TabPane>
        <TabPane tab={tab3} key="3">
          <ListTabSong></ListTabSong>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default TabAlbum;