export interface GetCustomerComplaintsByTypeAreaWorkshop {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    workshopNewFailAfterReparation: string;
    damageGeneratedService:         string;
    persistentFailure:              string;
    diagnosticFailure:              string;
    delayDiagnosis:                 string;
    delayRepairMaintenance:         string;
    totalWorkshop:                  number;
}
