// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: '/api',
  usuarioUrl: '/monitora-carteira/api',
  usuario: {


    // servicosExternos: {
    //   dadosBancariosUrl: '/dadosbancarios/api',
    //   integraUrl: '/integra/api',
    //   enderecosUrl: '/enderecos/api',
    //   servparticipanteUrl: '/servparticipante/api',
    //   servdominioUrl: '/servdominio/api',
    //   batchUrl: '/servicosexternosbatch/api',

  },
  auth: {
    baseUrl: '',
    authUrl: '/login/cas',
    loginUrl: '/api/login',
    logoutUrl: '/cas/logout',
    detailsUrl: '/api/user/details',
    tokenValidationUrl: '/api/token/validate',
    storage: localStorage,
    tokenStorageIndex: 'token',
    userStorageIndex: 'user',
    loginSuccessRoute: ''
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
