export interface GetComplainsByDepartment {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    categories:                           string[];
    prospectsDeparmentNoContact:          number[];
    prospectsDeparmentNoFollowUp:         number[];
    prospectsDeparmentBadAttention:       number[];
    prospectsDeparmentContactBadSchedule: number[];
    prospectsDeparmentChangeExecutive:    number[];
}
