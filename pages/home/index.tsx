import React from 'react';
import Header from '../../containers/home/templates/header';
import BodyHome from '../../containers/home/templates/bodyhome';
import styles from './home.module.scss'
import Footer from '../../containers/home/templates/footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <div className={styles.body}>
        <div className={styles.bodyContent}>
          <BodyHome></BodyHome>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;