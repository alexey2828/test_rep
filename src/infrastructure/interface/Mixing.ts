export interface Mixing {
    state: string;
    batchNumber: string;
    id: string;
    name: string;
    '@type': string;
    fields: [
        {
            id: string;
            name: string;
            componentBatchPlace: string;
        }
    ];
}
