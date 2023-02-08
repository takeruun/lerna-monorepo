import { exec } from './index';

describe('index spec', () => {
  it('exec', () => {
    const res = exec();

    expect(res).toBe('PEN_JS');
  });
});
