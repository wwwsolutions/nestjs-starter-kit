import { docker } from './docker';

describe('docker', () => {
  it('should work', () => {
    expect(docker()).toEqual('docker');
  });
});
