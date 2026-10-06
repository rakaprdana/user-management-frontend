export interface UserRequest {
  name: string;
  username: string;
  email: string;
  password?: string;
  is_delete?: boolean;
}
