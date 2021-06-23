export interface ITZPDetail {
  id: string;
  state: string;
  analysis: string;
  normativeDocument: string;
  batchNumber: string;
  name: string;
  fields: [
      {
          id: string;
          name: string;
          componentBatchPlace: string;
      }
  ];
}