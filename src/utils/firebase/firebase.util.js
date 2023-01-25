import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCb5q3PsCoBzKyw9HrsVKMqnEuHp18MjAo',
  authDomain: 'crown-clothing-fe866.firebaseapp.com',
  projectId: 'crown-clothing-fe866',
  storageBucket: 'crown-clothing-fe866.appspot.com',
  messagingSenderId: '1051501836451',
  appId: '1:1051501836451:web:2b903651989dc6ac492716',
};

// Initialize app
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});
/*The auth method doesn't have a new keyword attached when creating it and the GoogleProvider does, this because we can have multiple instances of the provider and set different parameters for each of them while we have a singleton of the authentication method because ideally the authentication method should always be the same across the entire application */
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // if User data does not exist {
  // create / set the document with the data from userAuth in my collection
  // }

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.error('error creating the user', error.message);
    }
  }

  // if User data exists{
  // We return userDocRef
  // }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = callBack =>
  onAuthStateChanged(auth, callBack);
