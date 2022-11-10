import { createContext, useState, useEffect } from 'react';
import {
  onAuthStateChangedListener,
  signOutUser,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.util';

// Seen as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser() {
    return null;
  },
});

export const UserProvider = ({ children }) => {
  // Initial values of objects to be stored in the context
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
