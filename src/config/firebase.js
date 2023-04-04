
import { initializeApp } from "firebase/app";
import { getFirestore}  from 'firebase/firestore/lite'
const firebaseConfig = {
  apiKey: "AIzaSyDoCtVGpMyKL73y2-w0LTE959OGmI4oPig",
  authDomain: "tiktok-jornada-10dbd.firebaseapp.com",
  projectId: "tiktok-jornada-10dbd",
  storageBucket: "tiktok-jornada-10dbd.appspot.com",
  messagingSenderId: "709586855821",
  appId: "1:709586855821:web:b75e8bb8e8a203a8c47fc4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;
