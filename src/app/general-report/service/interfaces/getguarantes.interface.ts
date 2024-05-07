export interface GetguarantesInterface {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    adviserDidNotValidateWarranty:   string;
    adviserResolutionTimeGuarantees: string;
    totalGuarantees:                 number;
}
