import pino from 'pino';
import { PinoTypeORMLogger } from '../src';

describe('index', () => {
  it('PinoTypeORMLogger', () => {
    new PinoTypeORMLogger(pino());
  });
});
