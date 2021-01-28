import { NextApiRequest, NextApiResponse } from 'next';
import xmlJs from 'xml-js';
import { LosfundInfoInqireResponseBody } from '../../models/LosfundInfo/LosfundInfoInqireResponseBody.model';
import { LosfundInfoInqire } from '../../models/LosfundInfo/LosfundInfoInquire.model';
import { LosfundInfoItem } from '../../models/LosfundInfo/LosfundInfoItem.model';

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const openRes: Response = await fetch(
    `http://apis.data.go.kr/1320000/LosfundInfoInqireService/getLosfundInfoAccToClAreaPd?serviceKey=${process.env.SERVICE_KEY}&START_YMD=20210101&END_YMD=20210126`
  );
  const resText: string = await openRes.text();
  const toJson = xmlJs.xml2js(resText, { compact: true }) as LosfundInfoInqire;
  const responseBody: LosfundInfoInqireResponseBody = toJson.response.body;
  const items: LosfundInfoItem[] = responseBody.items.item;
  res.statusCode = 200;
  res.json(items);
};
