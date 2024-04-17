export interface CRMInconsistenciesByExecutiveInterface {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    categories:                  string[];
    executivesIncidences:        number[];
    executivesWrongData:         number[];
    executivesNotRequestReports: number[];
    executivesNoActivityCRM:     number[];
    executivesNoComentaryCRM:    number[];
}
