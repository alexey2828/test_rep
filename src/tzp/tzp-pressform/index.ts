export interface ITzpPressform {
  id: string;
  state: string;
  detailType: string;
  passport: string;
  number: string;
  lastGeometricMeasurement: string;
  createAt: string;
  updateAt: string;
  fields: [
      {
          id: string;
          name: string;
      }
  ];
}