import firebase from '../firebase';

/**
 * Manages all instances of auth and user creation
 */
export default class SPAuthService {

  login(email: string, password: string) {
    
  }

  register(
    username: string,
    email: string, 
    password: string,
    onSuccess: (user: Object) => void,
    onError: () => void) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        onSuccess(user);
      })
      .catch((error) => {
        onError();
      })
  }

  logout() {
    
  }

}