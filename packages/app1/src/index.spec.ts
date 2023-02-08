import { exec, execV } from './index';

describe('index spec', () => {
  it('exec', () => {
    const res = exec();

    expect(res).toBe('PEN_JS');
  });

  it('execV', () => {
    const res = execV();

    expect(res).toBe('PEN_JS-V');
  });
});
