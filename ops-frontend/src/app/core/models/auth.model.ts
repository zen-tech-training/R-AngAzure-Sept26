// File: ops-frontend/src/app/core/models/auth.model.ts
export interface Login {
  username: string;
  password: string;
}

export interface LoginResponse {  
  id: number;
  username: string;
  role: "admin" | "superuser" | "user" ; // Default role is set to "user"
  token: string;
}
