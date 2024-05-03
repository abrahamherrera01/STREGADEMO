export interface getQuarterlyComparisonInterface {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    category: string[];
    series:   Series[];
}

export interface Series {
    name: string;
    data: number[];
}
