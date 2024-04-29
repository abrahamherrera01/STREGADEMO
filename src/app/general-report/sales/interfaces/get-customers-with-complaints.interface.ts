export interface GetCustomersWithComplaintsInterface {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    ventasComplaintsByDepartment_january:  VentasComplaintsByDepartment[];
    ventasComplaintsByDepartment_february: VentasComplaintsByDepartment[];
    ventasComplaintsByDepartment_march:    VentasComplaintsByDepartment[];
}

export interface VentasComplaintsByDepartment {
    sucursal:         string;
    total_complaints: number;
}
