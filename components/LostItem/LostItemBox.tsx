import React from 'react';
import { LosfundInfoItem } from '../../models/LosfundInfo/LosfundInfoItem.model';
import LostItem from './LostItem';
import styles from './LostItemBox.module.css';

export default function LostItemBox({ data }): JSX.Element {
  console.log('data,,, ', data);
  if (!data) {
    return <div>No datas</div>;
  } else {
    return (
      <div className={styles.row}>
        {data.map((d: LosfundInfoItem) => (
          <LostItem key={d.atcId._text} data={d} />
        ))}
      </div>
    );
  }
}
