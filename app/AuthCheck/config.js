// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAhQAumBdjbE3O4zERRwFIgvwjkJD2qFKc',
  authDomain: 'authcheck-18c70.firebaseapp.com',
  projectId: 'authcheck-18c70',
  storageBucket: 'authcheck-18c70.appspot.com',
  messagingSenderId: '512753429961',
  appId: '1:512753429961:web:fc6d81864b67d5c59d0c18',
  measurementId: 'G-JR13K65E6R',
}

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
export { firebase }
