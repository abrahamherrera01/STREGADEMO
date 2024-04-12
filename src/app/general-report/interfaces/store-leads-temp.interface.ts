export interface StoreLeadsTemp {
    code:      number;
    status:    string;
    respuesta: Respuesta;
}

export interface Respuesta {
    leads: string[];
}
