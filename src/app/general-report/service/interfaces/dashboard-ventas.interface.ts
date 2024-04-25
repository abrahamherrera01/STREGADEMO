export interface DashboardVentas {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    ordersService:                 Service[];
    totalOrderService:             number;
    surveyedService:               Service[];
    totalSurveyedService:          number;
    percentPublicSurvey:           string;
    percentGarantiesSurvey:        string;
    totalPercentSurvey:            string;
    promotersPublicService:        Service[];
    totalPromotersPublicService:   number;
    percentPromotersPublic:        string;
    percentPromotersGaranties:     string;
    totalPercentPromoters:         string;
    neutralPublicService:          Service[];
    totalNeutralPublicGaranties:   number;
    $percentNeutralPublic:         string;
    $percentNeutralGaranties:      string;
    $totalPercentNeutral:          string;
    detractorPublicService:        Service[];
    totalDetractorPublicGaranties: number;
    percentDetractorPublic:        string;
    percentDetractorGaranties:     string;
    totalPercentDetractor:         string;
    npsPublic:                     string;
    npsGaranties:                  string;
    totalNps:                      string;
    categoryIncidents:             string[];
    series:                        Series[];
    totalIncidentsSummary:         number;
    reasonNoContacted:             string[];
    seriesFormatNoContacted:       Series[];
    totalReasonNotContacted:       number;
    percentNotContacted:           string;
    sourceUntraceable:             string[];
    seriesFormatUntraceable:       Series[];
    totalUntraceable:              number;
    percentUntraceable:            string;
}

export interface Service {
    tipo_orden: string;
    count:      number;
    percentage?: any;
}

export enum TipoOrden {
    Garantias = "Garantias",
    Públicas = "Públicas",
}

export interface Series {
    name: TipoOrden;
    data: number[];
}
