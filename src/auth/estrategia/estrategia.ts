import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import{ ExtractJwt, Strategy } from "passport-jwt";
import { rol } from "src/database/Entidades/rol.entity";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'secretKey',
        });
    }

    async validate(payload: any){
        return {email: payload.email, rol: payload.rol};
    }
}