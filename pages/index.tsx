import { GetStaticProps } from 'next';
import Head from 'next/head';
import LostContainer from '../components/LostItem/LostContainer';
import xmlJs from 'xml-js';
import { LosfundInfoItem } from '../models/LosfundInfo/LosfundInfoItem.model';
import styles from '../styles/Home.module.css';
import { LosfundInfoInqireResponseBody } from '../models/LosfundInfo/LosfundInfoInqireResponseBody.model';
import { LosfundInfoInqire } from '../models/LosfundInfo/LosfundInfoInquire.model';

export const getStaticProps: GetStaticProps = async () => {
  // const response = await fetch('http://localhost:3000/api/losts');
  // const data: LosfundInfoItem[] = await response.json();

  const openRes: Response = await fetch(
    `http://apis.data.go.kr/1320000/LosfundInfoInqireService/getLosfundInfoAccToClAreaPd?serviceKey=${process.env.SERVICE_KEY}&START_YMD=20210101&END_YMD=20210127`
  );
  const resText: string = await openRes.text();
  const toJson = xmlJs.xml2js(resText, { compact: true }) as LosfundInfoInqire;
  const responseBody: LosfundInfoInqireResponseBody = toJson.response.body;
  const items: LosfundInfoItem[] = responseBody.items.item;

  return {
    props: {
      data: items,
    },
  };
};

export default function Home({ data }): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>find my lost</title>
      </Head>
      <LostContainer data={data} />
    </div>
  );
}
