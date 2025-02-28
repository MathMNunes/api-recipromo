import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy'; // Importe a estratégia local

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'yourSecretKey', // Substitua por uma chave secreta segura
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy], // Adicione a estratégia local
  controllers: [AuthController],
})
export class AuthModule {}
