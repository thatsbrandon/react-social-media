import firebase from '../firebase';

/**
 * Manages all instances of auth and user creation
 */
export default class SPAuthService {

  register(username: string, email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error("Error creating a new user", errorCode, errorMessage);
      })
  }

  logout() {
    
  }

}