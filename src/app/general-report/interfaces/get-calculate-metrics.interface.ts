export interface GetCalculatedMetrics {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    totalIncidences:       number;
    departmentPercentages: number[];
    categories:            string[];
    series:                Series[];
}

export interface Series {
    name: string;
    data: number[];
}
