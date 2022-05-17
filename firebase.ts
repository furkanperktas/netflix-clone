// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB5Aeh9S2d5qL8WYQEq8S9u86bru7T2VKw',
  authDomain: 'netflix-clone-6435b.firebaseapp.com',
  projectId: 'netflix-clone-6435b',
  storageBucket: 'netflix-clone-6435b.appspot.com',
  messagingSenderId: '1076398252398',
  appId: '1:1076398252398:web:26bc0c11928fc5ec48e17f',
  measurementId: 'G-HBKTS71QPK',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
