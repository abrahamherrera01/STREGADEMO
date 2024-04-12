export interface AdviserInterface {
    picture:any;
    name: string;
    leadsAssigned: number;
    leadsSurveyed: number;
    percentageSurveyed: number;
    leadsInconsCRM: number;
    leadsComplaints: number;
    leadsRequests: number;
    csiLeads: string;
    walletIncoming: number;
    walletSurveyed: number;
    walletValidity: number;
    csiWallet: number;
    walletIncons: number;
    localizables: number;
    walletComplaints: number;
    walletRequests: number;
    leads: boolean, 
    wallet: boolean, 
    activeTab: string
}
