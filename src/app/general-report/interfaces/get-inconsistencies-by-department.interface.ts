export interface GetInconsistenciesByDepartment {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    categories:                      string[];
    propspectsDeparment:             number[];
    propspectsDepartmentSurveyed:    number[];
    prospectsDeparmentInconsistency: number[];
    percentagesSurveyed:             number[];
    percentagesInconsistency:        number[];
    completo:                        Array<Array<number | string>>;
}
