import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from 'firebase/firestore'

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
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
      if(!userAuth) return;

      const userDocRef = doc(db, 'users', userAuth.uid);
      const userSnapshot = await getDoc(userDocRef);
     
      
      if(!userSnapshot.exists())  {
          const {displayName, email} = userAuth;
          const createdAt = new Date();

          try {
            await setDoc(userDocRef, {
              displayName,
              email,
              createdAt,
              ...additionalInformation
            });
          } catch(error) {
            console.log('error creating the user', error.message);
          }
      }

      return userDocRef;
      
    }

      
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};