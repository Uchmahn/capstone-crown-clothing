// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

// import {
// auth,
// signInWithGoogleRedirect,
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
// } from '../../utils/firebase/firebase.util';
// import { async } from '@firebase/util';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import AuthenticationContainer from './authentication.styles';

const Authentication = () => {
  // Sign In With Redirect

  // useEffect(() => {
  //   (async function () {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       console.log(response);
  //       const userDocRef = createUserDocumentFromAuth(response.user);
  //     }
  //   })();
  // }, []);

  return (
    <AuthenticationContainer>
      {/*
      Sign In wiith redirect example
      <button onClick={signInWithGoogleRedirect}>
      Sign In With Google Redirect
    </button> */}

      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
