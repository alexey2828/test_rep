import { TMember } from '../infrastructure/api-platform';

export interface IMixing extends TMember {
  createAt: Date;
  laboratoryAnalyzes: any;
  componentBatch: {componentType: {name: string; normativeDocument: {name: string}}};
  mixer: {name: string};
  locatedAt: {name: string};
  state: string;
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
