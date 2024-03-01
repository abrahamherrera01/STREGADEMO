export interface Login {
    code:   number;
    status: string;
    user:   User;
    token:  string;
    message: string;
}

export interface User {
    id:                number;
    name:              string;
    email:             string;
    email_verified_at: null;
    type:              string;
}
