import firebase from '../firebase';

/**
 * Manages all instances of auth and user creation
 */
export default class SPAuthService {

  login(email: string, password: string) {

  }

  callbackTest(onSuccess: () => void) {
    onSuccess();
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
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error("Error creating a new user", errorCode, errorMessage);
        
        // Fire off function from wherever it's called to do error cleanup.
        onError();
      })
  }

  logout() {
    
  }

}