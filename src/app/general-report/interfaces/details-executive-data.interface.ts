export interface DetailsExecutiveDataInterface {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    categories:        string[];
    detailsExecutives: DetailsExecutive[];
}

export interface DetailsExecutive {
    name:                     string;
    leadsAssigned:            number;
    leadsSurveyed:            number;
    leadsSurveyedPercentage:  number;
    leadsSatisfied:           number;
    percentageSatisfied:      number;
    leadsInconsCRM:           number;
    leadsComplaints:          number;
    leadsRequests:            number;
    walletIncoming:           number;
    walletSurveyed:           number;
    walletSurveyedPercentage: number;
    walletSatisfied:          number;
    csiWallet:                number;
    walletIncons:             number;
    untraceables:             number;
    walletComplaints:         number;
    walletRequests:           number;
}
