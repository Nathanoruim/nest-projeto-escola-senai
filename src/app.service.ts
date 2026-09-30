import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bem-vindo ao SENAI';
  }

  getInfo(): {
    disciplina: string;
    'carga-horaria': number;
    semestre: string;
    ativo: boolean;
  } {
    return {
      disciplina: 'Desenvolvimento de Sistemas',
      'carga-horaria': 120,
      semestre: '1º semestre',
      ativo: true,
    };
  }
}