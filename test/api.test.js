const request = require('supertest');
const app = require('../src/server.js');

describe('GET /hexToRgb/:hex', () => {
  test('valid 6-digit hex (no #)', async () => {
    const res = await request(app).get('/hexToRgb?hex=FF6347');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      r: 255,
      g: 99,
      b: 71
    });
  });

  test('valid 6-digit hex (with #)', async () => {
    const res = await request(app).get('/hexToRgb?hex=%23FF6347');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      r: 255,
      g: 99,
      b: 71
    });
  });

  test('invalid hex → should return 400', async () => {
    const res = await request(app).get('/hexToRgb?hex=gggggg');
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
    expect(res.body.success).toBe(false);
  });

  test('empty hex → 400', async () => {
    const res = await request(app).get('/hexToRgb?hex=');
    expect(res.status).toBe(400);
  });
});