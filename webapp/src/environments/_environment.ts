const BASE_PORT = ':1337';

export const globalEnvironment = (baseUrl: string) => ({
  api: {
    auth: {
      login:           baseUrl+BASE_PORT+'/users/login',
      register:        baseUrl+BASE_PORT+'/users/signin',
      password:        baseUrl+BASE_PORT+'/users/password',
      reload:          baseUrl+BASE_PORT+'/users/reload',
      refresh:         baseUrl+BASE_PORT+'/tokens/refresh',
    },
    city: {
      get:             baseUrl+BASE_PORT+'/city',
    },
    bar: {
      get:             baseUrl+BASE_PORT+'/bar',
    },
    bill: {
      get:             baseUrl+BASE_PORT+'/bill',
    }
  }
});
