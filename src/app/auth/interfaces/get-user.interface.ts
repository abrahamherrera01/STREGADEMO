export interface GetUser {
    code:   number;
    status: string;
    user:   User;
}

export interface User {
    id:                number;
    name:              string;
    email:             string;
    email_verified_at: null;
    type:              string;
}
