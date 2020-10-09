import React from 'react';
import PropTypes from 'prop-types';
import Header from './templates/header';
import BodyHome from './templates/bodyhome';
import styles from './home.module.scss'
import Footer from './templates/footer';

const Home: React.FC = (props) => {
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