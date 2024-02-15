// Generated by https://quicktype.io

export interface VehiclesOrderByCustomer {
    code:   number;
    status: string;
    data:   Datum[];
}

export interface Datum {
    id:             number;
    id_vehicle_bp:  string;
    name:           string;
    vin:            string;
    description:    null;
    model:          string;
    brand:          null;
    body:           null;
    km:             number;
    plates:         null;
    price:          null;
    purchase_date:  null;
    year_model:     number;
    cylinders:      number;
    exterior_color: string;
    interior_color: string;
    transmission:   string;
    drive_train:    string;
    location:       string;
    created_at:     string;
    updated_at:     string;
    deleted_at:     null;
    pivot:          Pivot;
    orders:         Order[];
}

export interface Order {
    id:                   number;
    id_order_bp:          string;
    service_date:         string;
    service_billing_date: string;
    sale_billing_date:    null;
    gross_price:          number;
    tax_price:            number;
    total_price:          number;
    order_km:             number;
    observations:         null | string;
    order_type:           string;
    order_category:       null;
    customer_id:          number;
    customer_fact_id:     number;
    customer_contact_id:  null;
    customer_legal_id:    null;
    vehicle_id:           number;
    sales_executive_id:   number;
    branch_id:            null;
    created_at:           string;
    updated_at:           string;
    deleted_at:           null;
    incidence:            null;
    survey:               Survey | null;
}

export interface Survey {
    id:            number | null;
    satisfaction:  string;
    csi:           number;
    nps:           null;
    recomendation: number;
    efficiency:    number;
    advisor:       number;
    job:           number;
    comments:      string;
    order_id:      number;
    created_at:    Date;
    updated_at:    Date;
    deleted_at:    null;
}

export interface Pivot {
    customer_id: number;
    vehicle_id:  number;
}