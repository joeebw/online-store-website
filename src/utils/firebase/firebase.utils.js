import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBW3ibl6SNLRZGzbYo-mK9y3EVeh8V6wU8",
    authDomain: "web-store-app-4ea5b.firebaseapp.com",
    projectId: "web-store-app-4ea5b",
    storageBucket: "web-store-app-4ea5b.appspot.com",
    messagingSenderId: "210578348830",
    appId: "1:210578348830:web:ecc7cebfeb83b311b2470f"
  };
  
 
  const fireBaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithGooglePopup(auth, provider);
