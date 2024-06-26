export interface AdviserInterface {
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
    leads:                    boolean;
    wallet:                   boolean;
    activeTab:                ActiveTab;
}
export enum ActiveTab {
    Leads = "leads",
}
