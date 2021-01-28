import { CommonValue } from '../common/CommonValue.model';
import { LosfundInfoItem } from './LosfundInfoItem.model';

export interface LosfundInfoInqireResponseBody {
  items: {
    item: LosfundInfoItem[];
  };
  numOfRows: CommonValue;
  pageNo: CommonValue;
  totalCount: CommonValue;
}
