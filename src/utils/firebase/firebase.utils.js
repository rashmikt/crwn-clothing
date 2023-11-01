import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARxJinuHI9hrqtz9Qw2dLtqEcGyrAXVpo",
  authDomain: "crwn-clothing-db-93d77.firebaseapp.com",
  projectId: "crwn-clothing-db-93d77",
  storageBucket: "crwn-clothing-db-93d77.appspot.com",
  messagingSenderId: "210621007088",
  appId: "1:210621007088:web:4a2dca974012bc74d8ee35",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
