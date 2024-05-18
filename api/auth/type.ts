export interface LoginRequest {
    empId: string;
    password: string;
}

export interface LoginResponse {
    access_token: string;
    token_type: string;
    expires_at: string;
    user: User;
}

export interface User {
    _id: number;
    firstname: string;
    lastname: string;
    empId: number;
    editedBy: Array<any>;
    email: string;
    role: string;
    isEnabledAdminPrivileges: boolean;
    createdAt: string;
    editedAt: string;
}