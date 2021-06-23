export interface ComponentBatchPlace {
    state: string;
    batchPlaceNumber: string;
    batchNumber: string;
    id: string;
    name: string;
    '@type': string;
    fields: [
        {
            id: string;
            name: string;
            norm: string;
        }
    ];
}
