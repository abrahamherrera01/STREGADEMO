export interface GetComplaintProcessByTypeAndExecutive {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    categories:                           string[];
    prospectsExecutiveNoContact:          number[];
    prospectsExecutiveNoFollowUp:         number[];
    prospectsExecutiveBadAttention:       number[];
    prospectsExecutiveContactBadSchedule: number[];
    prospectsExecutiveChangeExecutive:    number[];
}
