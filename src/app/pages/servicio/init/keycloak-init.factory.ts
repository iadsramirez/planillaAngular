import { KeycloakService } from "keycloak-angular";

//remoto




export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config: {
          url: 'https://138.128.245.244:8443' + '/auth',
          realm: 'Planilla',
          clientId: 'frontend',
        }

      });
}





//local


/*
export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://localhost:8080' + '/auth',
          realm: 'Demo-Realm',
          clientId: 'frontend',
        }
      });
}
*/

