import React from 'react';
import PropTypes from 'prop-types';
import styles from './cardalbum.module.scss'
import { PlayCircleOutlined } from "@ant-design/icons"

CardAlbum.propTypes = {

};

function CardAlbum(props) {
  const image = "https://vtv1.mediacdn.vn/thumb_w/650/2020/7/3/1061332173675372452476431818456362453126714o-1593780823287457624164-crop-1593780866985947628599.jpg"

  return (
    <div className={styles.card} >
      <div>
        <div className={styles.backroudCard}>
          <img className={styles.cardImg} src={image}></img>
        </div>
        {/* <div><b> Tên MV </b></div> */}
      </div>
      <div className={styles.opacity}>
        <span className={styles.play}>
          <PlayCircleOutlined style={{ color: "white" }} />
        </span>
      </div>
    </div>
  );
}

export default CardAlbum;