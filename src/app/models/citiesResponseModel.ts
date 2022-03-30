import { Cities } from './cities';
import { ResponseModel } from './responseModel';

export interface CitiesResponseModel extends ResponseModel {
  data: Cities[];
}
