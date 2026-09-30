import { Controller, Get } from '@nestjs/common';

@Controller('cursos')
export class CursosController {
  @Get()
  listar(): string[] {
    return ['Desenvolvimento de Sistemas', 'Eletrotécnica', 'Mecânica'];
  }
}