import { addNumber } from "../src/controllers/HelloController";
import { app } from '../src/app';
import request from 'supertest';

describe("sample unit test", () => {
  it('test', () => {
    const response = addNumber(1,1);
    expect(response).toEqual(2)
  })
});

describe('Post Endpoint', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/ping/complex')
      .send({
        first: 'string',
        second: 1,
      })  
    expect(res.status).toEqual(200)
  })
})
