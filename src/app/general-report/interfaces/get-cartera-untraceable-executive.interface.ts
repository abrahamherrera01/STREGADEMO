export interface GetCarteraUntraceableByExecutive {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    categories:                    string[];
    carteraExecutivesWrong:        number[];
    carteraExecutivesUnavailable:  number[];
    carteraExecutivesNon_existent: number[];
    carteraExecutivesVoicemail:    number[];
}
