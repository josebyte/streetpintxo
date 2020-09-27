import { globalEnvironment } from './_environment';

const END_POINT = 'http://localhost';

export const environment = {
  production: true,
  ...globalEnvironment(END_POINT)
};
