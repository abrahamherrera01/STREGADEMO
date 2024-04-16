export interface GetCalculateMetricsWallet {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    totalGlobalCartera:                number;
    totalIncidences:                   number;
    departmentPercentages:             number[];
    categories:                        string[];
    series:                            Series[];
    totalsByDepartment:                TotalsByDepartment[];
    totalCarteraContactedByDepartment: TotalCarteraEdByDepartment[];
    totalCarteraSatisfiedByDepartment: TotalCarteraEdByDepartment[];
}

export interface Series {
    name: string;
    data: number[];
}

export interface TotalCarteraEdByDepartment {
    category:   string;
    value:      number;
    percentage: number;
}

export interface TotalsByDepartment {
    category: string;
    value:    number;
}
