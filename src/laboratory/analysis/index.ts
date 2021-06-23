import { TMember } from '../../infrastructure/api-platform';

export interface IAnalysis extends TMember {
  laboratoryAnalyzes: any;
  mixer: {name: string};
  mixer_id: string;
  locatedAt: any;
  state: string;
  normativeDocument: string;
  batchNumber: string;
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
