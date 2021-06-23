export interface IСomponents {
    id: string;
    name: string;
    '@id': string;
    mixingTypeAbstract: {name: string};
    nameType: {name: string};
    available: any;
    normativeDocument: {name: string};
    fields: [
        {
            id: string;
            '@type': string;
            name: string;
            norm: string;
        }
    ];
}

export interface IComponet {
    id: string;
    name: string;
    normativeDocument: string;
}
