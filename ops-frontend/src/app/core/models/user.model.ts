// File: ops-frontend/src/app/core/models/user.model.ts
export interface UserResponse {
  id: number;
  name: string;
  username: string;
//   password?: string | null;
//   role: number;
  phone: string;
  email: string;
}

export interface CreateUser{  
  name: string;
  username: string;
  phone: string;
  email: string;
}