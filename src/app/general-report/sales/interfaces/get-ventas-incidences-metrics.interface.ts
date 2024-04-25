export interface GetVentasIncidencesMetricsInterface {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    totalVentas:                  number;
    allVentasByDepartment:        AllVentasByDepartment[];
    totalContacted:               number;
    ventasContactedByDepartment:  VentasContactedByDepartment[];
    totalPromotors:               number;
    ventasPromotorsByDepartment:  VentasPromotorsByDepartment[];
    totalNeutrals:                number;
    ventasNeutralsByDepartment:   VentasNeutralsByDepartment[];
    totalDetractors:              number;
    ventasDetractorsByDepartment: VentasDetractorsByDepartment[];
    NPS:                          any;
    departments:                  any[];
    categories_incidences:        any[];
    series_incidences:            any[];
    total_incidences:             number;
    categories_no_contacted:      any[];
    series_no_contacted:          any[];
    total_no_contacted:           number;
    categories_untraceable:       any[];
    seriesFormat_untraceable:     any[];
    totalUntraceable:             number;
}

 

export interface AllVentasByDepartment {
    sucursal:      string;
    total_ordenes: number;
}

export interface VentasContactedByDepartment {
    sucursal:              string;
    total_contacted:       number;
    porcentaje_contactado: string;
}

export interface VentasDetractorsByDepartment {
    sucursal:            string;
    total_detractors:    number;
    porcentaje_neutrals: string;
}

export interface VentasNeutralsByDepartment {
    sucursal:            string;
    total_neutrals:      number;
    porcentaje_neutrals: string;
}

export interface VentasPromotorsByDepartment {
    sucursal:             string;
    total_promotors:      number;
    porcentaje_promotors: string;
}
