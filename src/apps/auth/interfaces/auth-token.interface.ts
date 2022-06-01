export interface AuthToken {
  generateAt: Date;
  expiresIn: number;
  token: string;
}
