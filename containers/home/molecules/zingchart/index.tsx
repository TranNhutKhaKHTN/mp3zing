import React from 'react';
import styles from './zingchart.module.scss'

const ZingChart: React.FC = () => {
  return (
    <div className={styles.zingchart}>
      <div>
        <b>
          #ZING CART
        </b>
        <p>Bài hát</p>
        <p>MV</p>
      </div>
      <div>
        <b>
          TUẦN
        </b>
        <p>Bài hát</p>
        <p>MV</p>
        <p>Album</p>
      </div>
      <div>
        <b>
          US-UK CHART
        </b>
        <p>Bài hát</p>
        <p>MV</p>
        <p>Album</p>
      </div>

      <div>
        <b>KPOP CHART</b>
        <p>Bài hát</p>
        <p>MV</p>
        <p>Album</p>
      </div>
    </div>
  );
}

export default ZingChart;