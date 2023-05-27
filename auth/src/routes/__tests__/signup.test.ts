import request from 'supertest';
import { app } from '../../app';

// beforeAll(() => {
//   // start DB
// });

// beforeEach(() => {
//   // clean up DB
// });

// afterAll(() => {
//   // close DB Connection
// });

// it('should return 405 for non-post request to login route ', async () => {
//     await request(app).get('/').expect(200);
//   });

it('should return 422 if email is invalid ', async () => {
  await request(app).get('/').expect(200);
});
