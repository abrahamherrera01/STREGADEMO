export interface CustomerInterface {
  code: number
  status: string
  data: Paginate
}

export interface Paginate {
  current_page: number
  data: Customer[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: Link[]
  next_page_url: string
  path: string
  per_page: number
  prev_page_url: any
  to: number
  total: number
}

export interface Customer {
  id: number
  id_client_bp: string
  rfc: string
  tax_regime: string
  full_name: string
  gender?: string
  contact_method?: string
  phone_1: string
  phone_2: string
  phone_3: any
  cellphone: string
  email_1: string
  email_2: any
  city?: string
  delegacy: string
  colony: string
  address: string
  zip_code: string
  type: string
  picture: any
  user_id: any
  created_at: string
  updated_at: string
  deleted_at: any;
  sum_orders: SumOrder[];
}

export interface SumOrder {
  customer_id:       number;
  total_gross_price: number;
  total_tax_price:   number;
  total_total_price: number;
}

export interface Link {
  url?: string
  label: string
  active: boolean
}
