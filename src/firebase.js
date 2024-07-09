import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyASwMlsdxUYoczJZcZe6owMRsYbPta-WmI",
    authDomain: "todo-app-10146.firebaseapp.com",
    projectId: "todo-app-10146",
    storageBucket: "todo-app-10146.appspot.com",
    messagingSenderId: "490761796350",
    appId: "1:490761796350:web:e9cf2e452987ce35d4c3af"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export { db };
