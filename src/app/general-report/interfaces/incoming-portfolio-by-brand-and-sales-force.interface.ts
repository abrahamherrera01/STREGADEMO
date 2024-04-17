export interface IncomingPortfolioByBrandAndSalesForceInterface {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    categories:  string[];
    series:      any;
    totales:     number[];
    percentages: number[];
    total:       number;
}

export interface Series {
    Internet:              number[];
    "Base de Datos":       number[];
    "Visita a piso":       number[];
    "Llamada a recepción": number[];
    "Be-Back":             number[];
}
