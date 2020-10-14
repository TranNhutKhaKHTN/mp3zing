import React from 'react';
import Header from '../../containers/home/templates/header';
import styles from './playmusic.module.scss'
import Footer from '../../containers/home/templates/footer';
import BodyPlay from './../../containers/playmusic/templates/bodyPlay';

const PlayMusic: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <div className={styles.body}>
        <div className={styles.bodyContent}>
          <BodyPlay></BodyPlay>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default PlayMusic;