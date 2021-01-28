import React, { useState, useEffect } from 'react';
import styles from './LostContainer.module.css';
import LostItemBox from './LostItemBox';

export default function LostContainer({ data }): JSX.Element {
  const [convertData, setConvertData] = useState([]);

  useEffect(() => {
    if (data) {
      const tempConvertDatas = [];
      let tempConvertData = [];
      data.forEach((d, idx) => {
        tempConvertData.push(d);
        if ((idx + 1) % 2 === 0 || idx + 1 === data.length) {
          tempConvertDatas.push(tempConvertData);
          tempConvertData = [];
        }
      });

      setConvertData((prevArr) => [...prevArr, ...tempConvertDatas]);
    }
  }, []);
  if (convertData.length === 0) {
    return <main className={styles.main_container}>No data</main>;
  }
  return (
    <main className={styles.main_container}>
      {convertData.map((_data, idx) => (
        <LostItemBox key={idx} data={_data} />
      ))}
    </main>
  );
}
