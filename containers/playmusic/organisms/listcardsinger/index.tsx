import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React from 'react';
import CardSinger from '@containers/playmusic/molecules/cardsinger';
import styles from './listcardsinger.module.scss'

interface Cardsinger {
  image: string;
  care: number;
  singer: string;
}

type Props = {
  data: Cardsinger[]
}

const ListCardSinger: React.FC<Props> = (props: Props) => {
  const datas = props.data
  const listcardsinger = datas.map((data, index) => {
    return (
      <CardSinger key={index} data={data} />
    )
  })
  return (
    <div>
      <div className={styles.title}>
        <b>Nghệ Sĩ Tham Gia</b>
        <div>
          <LeftOutlined />
          <RightOutlined />
        </div>
      </div>

      <div className={styles.listcart}>
        {listcardsinger}
      </div>
    </div>
  );
}

export default ListCardSinger;