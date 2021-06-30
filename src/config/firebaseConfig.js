import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyDocAAF-MJ8bNTXbpDHY3r_fW8oPwLdxjw',
  authDomain: 'slack-28304.firebaseapp.com',
  projectId: 'slack-28304',
  storageBucket: 'slack-28304.appspot.com',
  messagingSenderId: '583976248013',
  appId: '1:583976248013:web:940c8de43414f376137f84',
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
