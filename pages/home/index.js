import React from 'react';
import PropTypes from 'prop-types';
import Header from './templates/header';
import Body from './templates/body';
import styles from './home.module.scss'

Home.propTypes = {

};

function Home(props) {
  return (
    <div>
      <Header></Header>
      <div className={styles.body}>
        <div className={styles.bodyContent}>
          <Body></Body>
        </div>
      </div>
    </div>
  );
}

export default Home;