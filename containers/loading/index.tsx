import { Spin } from 'antd';
import React from 'react';
import styles from "./loading.module.scss"

const Loading = () => {
  return (
    <div className={styles.loading}>
      <Spin size="large" />
    </div>
  );
}

export default Loading;