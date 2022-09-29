import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REAT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REAT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REAT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REAT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REAT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REAT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);