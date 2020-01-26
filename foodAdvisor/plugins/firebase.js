import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyAByxKPwjy1jjWwnY8omWs3XXaylDnZJtU",
    authDomain: "foodadvisor-f5021.firebaseapp.com",
    databaseURL: "https://foodadvisor-f5021.firebaseio.com",
    projectId: "foodadvisor-f5021",
    storageBucket: "foodadvisor-f5021.appspot.com",
    messagingSenderId: "794535241045",
    appId: "1:794535241045:web:697e657f48f351644a3bdc"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore()
export { db, firebase }