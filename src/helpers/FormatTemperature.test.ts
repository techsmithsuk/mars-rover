import formatTemperature from './FormatTemperature';

describe('Format Temperature', () => {

    it('should round number and return with  °C', () => {
      expect(formatTemperature(6.8778)).toBe("7 °C");
    })

    it('should return N/A if the input is undefined', () => {
      expect(formatTemperature(undefined)).toBe("N/A");
    })
  });