import { globalEnvironment } from './_environment';

const END_POINT = 'http://localhost';

export const environment = {
  production: false,
  ...globalEnvironment(END_POINT),
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
