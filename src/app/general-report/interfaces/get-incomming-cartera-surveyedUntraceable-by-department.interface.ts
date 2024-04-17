export interface GetIncommingCarteraSurveyedUntraceableByDepartment {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    categories:                    string[];
    carteraDeparment:              number[];
    carteraDepartmentSurveyed:     number[];
    carteraDeparmentInconsistency: number[];
    percentagesSurveyed:           number[];
    percentagesInconsistency:      number[];
    completo:                      Array<Array<number | string>>;
}
