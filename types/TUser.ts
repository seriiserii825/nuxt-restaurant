export type TUser = {
  name: string;
  photo: string | null;
  phone: string | null;
  address: string | null;
  token: string | null;
  role: "admin" | "user";
  status: "1" | "0";
  email: string;
  email_verified_at: string | null;
  password: string;
  rememberToken: string | null;
  created_at: string;
  updated_at: string;
};
