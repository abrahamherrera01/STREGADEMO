export interface GetUntraceablesByExecutives {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    categories:                   string[];
    ventasExecutivesWrong:        number[];
    ventasExecutivesUnavailable:  number[];
    ventasExecutivesNon_existent: number[];
    ventasExecutivesVoicemail:    number[];
}
