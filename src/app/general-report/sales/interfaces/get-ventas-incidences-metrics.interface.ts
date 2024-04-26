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
    departments:                  string[];
    categories_incidences:        string[];
    series_incidences:            Administrativos[];
    total_incidences:             number;
    categories_no_contacted:      string[];
    series_no_contacted:          Administrativos[];
    total_no_contacted:           number;
    categories_untraceable:       string[];
    seriesFormat_untraceable:     SeriesFormatUntraceable[];
    totalUntraceable:             number;
}

export interface Nps {
    ADMINISTRATIVOS:    number;
    "Foráneos digital": number;
    "Matriz Piso":      number;
    Seminuevos:         number;
    "Zacatelco Piso":   number;
}

export interface AllVentasByDepartment {
    sucursal:      string;
    total_ordenes: number;
}

export interface SeriesFormatUntraceable {
    name: string;
    data: number[];
}

export interface Administrativos {
    name: string;
    data: number[];
}

export interface VentasContactedByDepartment {
    sucursal:              string;
    total_contacted:       number;
    porcentaje_contactado: string;
}

export interface VentasDetractorsByDepartment {
    sucursal:              string;
    total_detractors:      number;
    porcentaje_detractors: string;
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
