import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
// import { AuthService } from '../services/auth.service';
import { JwtPayload } from '../interfaces/jwt-playload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  // constructor(private readonly authService: AuthService) {
  //   super({
  //     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  //     secretOrKey: 'test',
  //   });
  // }

  async validate(payload: JwtPayload): Promise<any> {
    const { email } = payload;

    //const user = await this.authService.validateUser(email); a revoir lorsque le service sera cree

    // if (!user) {
    //   return null;
    // }

    // return user;
  }
}
