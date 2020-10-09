import React from 'react';
import PropTypes from 'prop-types';
import Header from '../home/templates/header';
import styles from './playmusic.module.scss'
import Footer from '../home/templates/footer';
import BodyPlay from './templates/bodyPlay';

const PlayMusic: React.FC = (props) => {
  return (
    <div>
      <Header></Header>
      <div className={styles.body}>
        <div className={styles.bodyContent}>
          <BodyPlay></BodyPlay>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default PlayMusic;