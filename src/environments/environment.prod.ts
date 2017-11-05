import { firebaseConfig } from './firebase';


export const environment = {
  production: true,
  firebase: firebaseConfig,
  url: 'https://block5d-frontend.herokuapp.com/',
  homepath: '/members',
  loginpath: '/login',
  firebaseTokenKey: 'FIREBASE_TOKEN'
};
