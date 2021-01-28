import { LosfundInfoInquireResponse } from './LosfundInfoInquireResponse.model';

export interface LosfundInfoInqire {
  _declaration: {
    _attributes: {
      version: string;
      encoding: string;
      standalone: string;
    };
  };
  response: LosfundInfoInquireResponse;
}
