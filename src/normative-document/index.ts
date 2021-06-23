import { TMember } from '../infrastructure/api-platform';

export interface IND extends TMember {
  laboratoryAnalyzes: any;
  mixer: {name: string};
  mixer_id: string;
  locatedAt: any;
  state: string;
  normativeDocument: any; //{fields: [{name: string}]}
  batchNumber: string;
  mixingType: any;
  name: string;
  batchPlaceNumber: string;
  mixingComponents: [
    {
    componentBatchPlace: string;
    }
  ];
  fields: [
      {
          id: string;
          name: string;
          componentBatchPlace: string;
      }
  ];
}
