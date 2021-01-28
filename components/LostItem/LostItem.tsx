import Image from 'next/image';
import React from 'react';
import styles from './LostItem.module.css';

export default function LostItem({ data }): JSX.Element {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <span>{data.fdPrdtNm._text}</span>
      </div>
      <Image src={data.fdFilePathImg._text} width={320} height={280} />
      <div className={styles.cardDesc}>
        <p>{data.depPlace._text}</p>
      </div>
    </div>
  );
}
