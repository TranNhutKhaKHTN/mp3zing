import React from 'react';
import PropTypes from 'prop-types';
import styles from './zingchart.module.scss'

ZingChart.propTypes = {

};

function ZingChart(props) {
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
        <p>
          Bài hát
        </p>
        <p>MV</p>
        <p>TUẦN</p>
      </div>
      <div>
        <b>
          US-UK CHART
        </b>
      </div>

      <div>
        <b>KPOP CHART</b>
      </div>
    </div>
  );
}

export default ZingChart;