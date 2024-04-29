export interface GetComparativeNpsInterface {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    categories:       string[];
    seriesFormat_NPS: SeriesFormatNP[];
}

export interface SeriesFormatNP {
    data: Array<number | string>;
}
