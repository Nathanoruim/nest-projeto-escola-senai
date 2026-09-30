import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppController } from './../src/app.controller.js';
import { AppService } from './../src/app.service.js';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Bem-vindo ao SENAI');
  });

  it('/info (GET)', () => {
    return request(app.getHttpServer())
      .get('/info')
      .expect(200)
      .expect({
        disciplina: 'Desenvolvimento de Sistemas',
        'carga-horaria': 120,
        semestre: '1º semestre',
        ativo: true,
      });
  });

  afterEach(async () => {
    await app.close();
  });
});
