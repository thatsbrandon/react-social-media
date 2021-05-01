import firebase from 'firebase';

let config = {
  apiKey: "AIzaSyAWa1yDJal0DbCwuJ0SRHpqltQY-YraAdk",
  authDomain: "rjs-social-posts.firebaseapp.com",
  projectId: "rjs-social-posts",
  storageBucket: "rjs-social-posts.appspot.com",
  messagingSenderId: "543792483447",
  appId: "1:543792483447:web:4e1c16d500d34778588a72",
  measurementId: "G-C508PBKMZT"
};

firebase.initializeApp(config);
firebase.analytics();

export default firebase;