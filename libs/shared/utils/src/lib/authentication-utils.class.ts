import { compare, hash } from 'bcryptjs';

export class AuthenticationUtils {
  static async validate(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return await compare(password, hashedPassword);
  }

  static async hash(password: string): Promise<string> {
    return await hash(password, 10);
  }
}
