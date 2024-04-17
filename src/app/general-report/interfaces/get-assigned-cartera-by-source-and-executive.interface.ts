export interface GetAssignedCarteraBySourceAndExecutive {
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
    NO: number[];
    SI: number[];
}
