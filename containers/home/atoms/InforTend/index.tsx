import React from 'react';
import styles from './infortend.module.scss'
import ListIcon from '../listicon';

interface tenditem {
  index: number;
  image: string;
  singer: string;
  song: string;
}

type Props = {
  data: tenditem
}

const InforTend: React.FC<Props> = () => {
  return (
    <div className={styles.infortend}>
      <div></div>
      <div className={styles.toolshare}>
        <div>
        </div>
        <div>
          <span className={styles.grIcon}>
            <ListIcon />
          </span>
          <span className={styles.watch}>
            67.540
          </span>
        </div>
      </div>
    </div>
  );
}

export default InforTend;