export interface GetSourceLeadMetricsInterface {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    categories:  string[];
    series:      Series;
    totales:     number[];
    percentages: number[];
    total:       number;
}

export interface Series {
    SEMINUEVO: number[];
    NUEVO:     number[];
}
