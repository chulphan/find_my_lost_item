import { createMocks } from 'node-mocks-http';
import { testClient } from '../../testClient';
import LostHandler from '../../../pages/api/losts';
import xmlJs from 'xml-js';

/**
 * 
 * [
  {
    atcId: { _text: 'F2021012800000019' },
    depPlace: { _text: '수송지구대' },
    fdFilePathImg: {
      _text: 'https://www.lost112.go.kr/lostnfs/images/sub/img02_no_img.gif'
    },
    fdPrdtNm: { _text: '보테가베네타' },
    fdSbjt: { _text: '보테가베네타(블랙(검정)색)을 습득하여 보관하고 있습니다.' },
    fdSn: { _text: '1' },
    fdYmd: { _text: '2021-01-24' },
    prdtClNm: { _text: '지갑 > 남성용 지갑' },
    rnum: { _text: '1' }
  },
  {
    atcId: { _text: 'F2021012700001949' },
    depPlace: { _text: '노송지구대' },
    fdFilePathImg: {
      _text: 'https://www.lost112.go.kr/lostnfs/images/sub/img02_no_img.gif'
    },
    fdPrdtNm: { _text: '손가방' },
    fdSbjt: { _text: '손가방(블랙(검정)색)을 습득하여 보관하고 있습니다.' },
    fdSn: { _text: '1' },
    fdYmd: { _text: '2021-01-25' },
    prdtClNm: { _text: '가방 > 여성용가방' },
    rnum: { _text: '2' }
  },
  {
    atcId: { _text: 'F2021012700001932' },
    depPlace: { _text: '서울강북경찰서민원봉사실' },
    fdFilePathImg: {
      _text: 'https://www.lost112.go.kr/lostnfs/images/sub/img02_no_img.gif'
    },
    fdPrdtNm: { _text: '남성용 검정색 반지갑' },
    fdSbjt: { _text: '남성용 검정색 반지갑(블랙(검정)색)을 습득하여 보관하고 있습니다.' },
    fdSn: { _text: '1' },
    fdYmd: { _text: '2021-01-26' },
    prdtClNm: { _text: '지갑 > 남성용 지갑' },
    rnum: { _text: '3' }
  },
  {
    atcId: { _text: 'F2021012700001916' },
    depPlace: { _text: '부산진경찰서' },
    fdFilePathImg: {
      _text: 'https://www.lost112.go.kr/lostnfs/images/uploadImg/20210127/20210127112256778.jpg'
    },
    fdPrdtNm: { _text: '베이지색 상품권 봉투 ' },
    fdSbjt: { _text: '베이지색 상품권 봉투 (피치오렌지(오렌지)색)을 습득하여 보관하고 있습니다.' },
    fdSn: { _text: '1' },
    fdYmd: { _text: '2021-01-09' },
    prdtClNm: { _text: '기타물품 > 기타' },
    rnum: { _text: '4' }
  },
  {
    atcId: { _text: 'F2021012700001914' },
    depPlace: { _text: '부산진경찰서' },
    fdFilePathImg: {
      _text: 'https://www.lost112.go.kr/lostnfs/images/uploadImg/20210127/20210127112632623.jpg'
    },
    fdPrdtNm: { _text: '검은색 가죽 크로스백 ' },
    fdSbjt: { _text: '검은색 가죽 크로스백 (블랙(검정)색)을 습득하여 보관하고 있습니다.' },
    fdSn: { _text: '1' },
    fdYmd: { _text: '2021-01-10' },
    prdtClNm: { _text: '가방 > 남성용가방' },
    rnum: { _text: '5' }
  },
  {
    atcId: { _text: 'F2021012700001912' },
    depPlace: { _text: '부산진경찰서' },
    fdFilePathImg: {
      _text: 'https://www.lost112.go.kr/lostnfs/images/uploadImg/20210127/20210127111905432.jpg'
    },
    fdPrdtNm: { _text: '장미모양 금색 장식 핀' },
    fdSbjt: { _text: '장미모양 금색 장식 핀(오렌지(연한오렌지)색)을 습득하여 보관하고 있습니다.' },
    fdSn: { _text: '1' },
    fdYmd: { _text: '2021-01-12' },
    prdtClNm: { _text: '기타물품 > 기타' },
    rnum: { _text: '6' }
  },
  {
    atcId: { _text: 'F2021012700001910' },
    depPlace: { _text: '부산진경찰서' },
    fdFilePathImg: {
      _text: 'https://www.lost112.go.kr/lostnfs/images/uploadImg/20210127/20210127111709382.jpg'
    },
    fdPrdtNm: { _text: '빨간색 카드지갑' },
    fdSbjt: { _text: '빨간색 카드지갑(레드(빨강)색)을 습득하여 보관하고 있습니다.' },
    fdSn: { _text: '1' },
    fdYmd: { _text: '2021-01-13' },
    prdtClNm: { _text: '지갑 > 기타 지갑' },
    rnum: { _text: '7' }
  },
  {
    atcId: { _text: 'F2021012700001906' },
    depPlace: { _text: '부산진경찰서' },
    fdFilePathImg: {
      _text: 'https://www.lost112.go.kr/lostnfs/images/sub/img02_no_img.gif'
    },
    fdPrdtNm: { _text: '현금' },
    fdSbjt: { _text: '현금(화이트(흰)색)을 습득하여 보관하고 있습니다.' },
    fdSn: { _text: '2' },
    fdYmd: { _text: '2021-01-08' },
    prdtClNm: { _text: '현금 > 현금' },
    rnum: { _text: '8' }
  },
  {
    atcId: { _text: 'F2021012700001906' },
    depPlace: { _text: '부산진경찰서' },
    fdFilePathImg: {
      _text: 'https://www.lost112.go.kr/lostnfs/images/uploadImg/20210127/20210127111032376.jpg'
    },
    fdPrdtNm: { _text: '남색 반지갑 ' },
    fdSbjt: { _text: '남색 반지갑 (블루(파랑)색)을 습득하여 보관하고 있습니다.' },
    fdSn: { _text: '1' },
    fdYmd: { _text: '2021-01-08' },
    prdtClNm: { _text: '지갑 > 여성용 지갑' },
    rnum: { _text: '9' }
  },
  {
    atcId: { _text: 'F2021012700001904' },
    depPlace: { _text: '옥정지구대' },
    fdFilePathImg: {
      _text: 'https://www.lost112.go.kr/lostnfs/images/sub/img02_no_img.gif'
    },
    fdPrdtNm: { _text: '남성용 헤지스 반지갑' },
    fdSbjt: { _text: '남성용 헤지스 반지갑(블랙(검정)색)을 습득하여 보관하고 있습니다.' },
    fdSn: { _text: '1' },
    fdYmd: { _text: '2021-01-26' },
    prdtClNm: { _text: '지갑 > 남성용 지갑' },
    rnum: { _text: '10' }
  }
]
 */

const mockData = [
  {
    atcId: { _text: 'F2021012800000019' },
    depPlace: { _text: '수송지구대' },
    fdFilePathImg: {
      _text: 'https://www.lost112.go.kr/lostnfs/images/sub/img02_no_img.gif',
    },
    fdPrdtNm: { _text: '보테가베네타' },
    fdSbjt: {
      _text: '보테가베네타(블랙(검정)색)을 습득하여 보관하고 있습니다.',
    },
    fdSn: { _text: '1' },
    fdYmd: { _text: '2021-01-24' },
    prdtClNm: { _text: '지갑 > 남성용 지갑' },
    rnum: { _text: '1' },
  },
  {
    atcId: { _text: 'F2021012700001949' },
    depPlace: { _text: '노송지구대' },
    fdFilePathImg: {
      _text: 'https://www.lost112.go.kr/lostnfs/images/sub/img02_no_img.gif',
    },
    fdPrdtNm: { _text: '손가방' },
    fdSbjt: { _text: '손가방(블랙(검정)색)을 습득하여 보관하고 있습니다.' },
    fdSn: { _text: '1' },
    fdYmd: { _text: '2021-01-25' },
    prdtClNm: { _text: '가방 > 여성용가방' },
    rnum: { _text: '2' },
  },
  {
    atcId: { _text: 'F2021012700001932' },
    depPlace: { _text: '서울강북경찰서민원봉사실' },
    fdFilePathImg: {
      _text: 'https://www.lost112.go.kr/lostnfs/images/sub/img02_no_img.gif',
    },
    fdPrdtNm: { _text: '남성용 검정색 반지갑' },
    fdSbjt: {
      _text: '남성용 검정색 반지갑(블랙(검정)색)을 습득하여 보관하고 있습니다.',
    },
    fdSn: { _text: '1' },
    fdYmd: { _text: '2021-01-26' },
    prdtClNm: { _text: '지갑 > 남성용 지갑' },
    rnum: { _text: '3' },
  },
  {
    atcId: { _text: 'F2021012700001916' },
    depPlace: { _text: '부산진경찰서' },
    fdFilePathImg: {
      _text:
        'https://www.lost112.go.kr/lostnfs/images/uploadImg/20210127/20210127112256778.jpg',
    },
    fdPrdtNm: { _text: '베이지색 상품권 봉투 ' },
    fdSbjt: {
      _text:
        '베이지색 상품권 봉투 (피치오렌지(오렌지)색)을 습득하여 보관하고 있습니다.',
    },
    fdSn: { _text: '1' },
    fdYmd: { _text: '2021-01-09' },
    prdtClNm: { _text: '기타물품 > 기타' },
    rnum: { _text: '4' },
  },
  {
    atcId: { _text: 'F2021012700001914' },
    depPlace: { _text: '부산진경찰서' },
    fdFilePathImg: {
      _text:
        'https://www.lost112.go.kr/lostnfs/images/uploadImg/20210127/20210127112632623.jpg',
    },
    fdPrdtNm: { _text: '검은색 가죽 크로스백 ' },
    fdSbjt: {
      _text:
        '검은색 가죽 크로스백 (블랙(검정)색)을 습득하여 보관하고 있습니다.',
    },
    fdSn: { _text: '1' },
    fdYmd: { _text: '2021-01-10' },
    prdtClNm: { _text: '가방 > 남성용가방' },
    rnum: { _text: '5' },
  },
  {
    atcId: { _text: 'F2021012700001912' },
    depPlace: { _text: '부산진경찰서' },
    fdFilePathImg: {
      _text:
        'https://www.lost112.go.kr/lostnfs/images/uploadImg/20210127/20210127111905432.jpg',
    },
    fdPrdtNm: { _text: '장미모양 금색 장식 핀' },
    fdSbjt: {
      _text:
        '장미모양 금색 장식 핀(오렌지(연한오렌지)색)을 습득하여 보관하고 있습니다.',
    },
    fdSn: { _text: '1' },
    fdYmd: { _text: '2021-01-12' },
    prdtClNm: { _text: '기타물품 > 기타' },
    rnum: { _text: '6' },
  },
  {
    atcId: { _text: 'F2021012700001910' },
    depPlace: { _text: '부산진경찰서' },
    fdFilePathImg: {
      _text:
        'https://www.lost112.go.kr/lostnfs/images/uploadImg/20210127/20210127111709382.jpg',
    },
    fdPrdtNm: { _text: '빨간색 카드지갑' },
    fdSbjt: {
      _text: '빨간색 카드지갑(레드(빨강)색)을 습득하여 보관하고 있습니다.',
    },
    fdSn: { _text: '1' },
    fdYmd: { _text: '2021-01-13' },
    prdtClNm: { _text: '지갑 > 기타 지갑' },
    rnum: { _text: '7' },
  },
  {
    atcId: { _text: 'F2021012700001906' },
    depPlace: { _text: '부산진경찰서' },
    fdFilePathImg: {
      _text: 'https://www.lost112.go.kr/lostnfs/images/sub/img02_no_img.gif',
    },
    fdPrdtNm: { _text: '현금' },
    fdSbjt: { _text: '현금(화이트(흰)색)을 습득하여 보관하고 있습니다.' },
    fdSn: { _text: '2' },
    fdYmd: { _text: '2021-01-08' },
    prdtClNm: { _text: '현금 > 현금' },
    rnum: { _text: '8' },
  },
  {
    atcId: { _text: 'F2021012700001906' },
    depPlace: { _text: '부산진경찰서' },
    fdFilePathImg: {
      _text:
        'https://www.lost112.go.kr/lostnfs/images/uploadImg/20210127/20210127111032376.jpg',
    },
    fdPrdtNm: { _text: '남색 반지갑 ' },
    fdSbjt: {
      _text: '남색 반지갑 (블루(파랑)색)을 습득하여 보관하고 있습니다.',
    },
    fdSn: { _text: '1' },
    fdYmd: { _text: '2021-01-08' },
    prdtClNm: { _text: '지갑 > 여성용 지갑' },
    rnum: { _text: '9' },
  },
  {
    atcId: { _text: 'F2021012700001904' },
    depPlace: { _text: '옥정지구대' },
    fdFilePathImg: {
      _text: 'https://www.lost112.go.kr/lostnfs/images/sub/img02_no_img.gif',
    },
    fdPrdtNm: { _text: '남성용 헤지스 반지갑' },
    fdSbjt: {
      _text: '남성용 헤지스 반지갑(블랙(검정)색)을 습득하여 보관하고 있습니다.',
    },
    fdSn: { _text: '1' },
    fdYmd: { _text: '2021-01-26' },
    prdtClNm: { _text: '지갑 > 남성용 지갑' },
    rnum: { _text: '10' },
  },
];
jest.mock('xmlJs');
describe('for api/losts', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementationOnce(() => {
      return new Promise((resolve, reject) => {
        resolve({
          ok: true,
          status: 200,
          text: jest.fn(),
        });
      });
    });
  });

  it('for api/losts', async () => {
    const { req, res } = createMocks({});
    const lostHandler = await LostHandler(req, res);

    expect(lostHandler).toBeCalled();
    expect(lostHandler).toBeCalledTimes(1);
  });
});
