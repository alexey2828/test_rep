export interface ITzpPlate {
  id: string;
  state: string;
  number: string;
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