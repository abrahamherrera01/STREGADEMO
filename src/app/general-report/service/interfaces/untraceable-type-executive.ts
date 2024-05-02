export interface UntraceableTypeExecutive {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    executives:        string[];
    reasonNoContacted: string[];
    seriesFormat:      SeriesFormat[];
}

export interface SeriesFormat {
    name: string;
    data: number[];
}
