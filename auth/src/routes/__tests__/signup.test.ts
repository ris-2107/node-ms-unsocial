import request from 'supertest';
import { app } from '../../app';

beforeAll(() => {
  // start DB
});

beforeEach(() => {
  // clean up DB
});

afterAll(() => {
  // close DB Connection
});

it('Responds with status 200', async () => {
  await request(app).get('/').expect(200);
});
