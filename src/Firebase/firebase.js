import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBsXOcTS-8nMdNrZj7KjBXhAP1p96-z2YQ",
  authDomain: "projectsdb-cb8d9.firebaseapp.com",
  projectId: "projectsdb-cb8d9",
  storageBucket: "projectsdb-cb8d9.appspot.com",
  messagingSenderId: "949145793359",
  appId: "1:949145793359:web:7b0f0444960f743bb10b3a",
  measurementId: "G-4QZWKJ2XPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
export const colRef = collection(db,'projects')

export const getArray = getDocs(colRef)
  .then(snapshot => {
    let projects = []
    snapshot.docs.forEach(doc => {
      projects.push({...doc.data(),id:doc.id})
    })
    return projects;
  })
  .catch(error => console.log(error))