//интерфейс ТЗП детали, пока структуры нет
export interface TZPPlate {
    id: string;
    numberDetail: string;
    typeDetail: string;
    dataMakeDetail: string;
    sampleForAnalysis: string;
    state: string;
    qualityControlReport: string; 
      fields: [
          {
              id: string;
              name: string;
              componentBatchPlace: string;
          }
      ];
  }
  
  