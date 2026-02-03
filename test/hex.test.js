const request = require('supertest');
const { hexToRgb } = require('../src/hexToRgb.js');

describe('hexToRgb utility', () => {
  test('converts 6-digit hex', () => {
    expect(hexToRgb('FF5733')).toEqual({ r: 255, g: 87, b: 51 });
  });

  test('converts 6-digit hex with #', () => {
    expect(hexToRgb('#4682B4')).toEqual({ r: 70, g: 130, b: 180 });
  });

  test('returns null for invalid inputs', () => {
    expect(hexToRgb('gggggg')).toBeNull();
    expect(hexToRgb('#gggggg')).toBeNull();
    expect(hexToRgb('')).toBeNull();
    expect(hexToRgb('#')).toBeNull();
    expect(hexToRgb('##ff0000')).toBeNull();
  });
});