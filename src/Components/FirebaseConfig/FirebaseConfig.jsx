
 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCautj3K3RMpAFqPUPd39Gff9npd1TQPsE",
  authDomain: "assignmant-12.firebaseapp.com",
  projectId: "assignmant-12",
  storageBucket: "assignmant-12.appspot.com",
  messagingSenderId: "425098460573",
  appId: "1:425098460573:web:75dffdcdc3543af201c374"
};
 
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)