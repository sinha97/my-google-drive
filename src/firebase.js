import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDCrpDRdkzCTpgUNDIWoc5QaBp1DZ7u-VI",
    authDomain: "my--drive-ae541.firebaseapp.com",
    projectId: "my--drive-ae541",
    storageBucket: "my--drive-ae541.appspot.com",
    messagingSenderId: "794882622129",
    appId: "1:794882622129:web:1e88a4aeee0ec3290dd890"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }