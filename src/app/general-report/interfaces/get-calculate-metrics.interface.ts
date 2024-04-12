export interface GetCalculatedMetrics {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    totalGlobalLeads:                number;
    totalIncidences:                 number;
    departmentPercentages:           number[];
    categories:                      string[];
    series:                          Series[];
    totalLeadsByDepartment:          TotalLeadsByDepartment[];
    totalLeadsAssignedByDepartment:  TotalLeadsByDepartment[];
    totalLeadsContactedByDepartment: TotalLeadsEdByDepartment[];
    totalLeadsSatisfiedByDepartment: TotalLeadsEdByDepartment[];
}

export interface Series {
    name: string;
    data: number[];
}

export interface TotalLeadsByDepartment {
    category: string;
    value:    number;
}

export interface TotalLeadsEdByDepartment {
    category:   string;
    value:      number;
    percentage: number;
}
