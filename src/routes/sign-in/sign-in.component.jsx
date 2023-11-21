import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { SignUpForm } from "../../components/sign-up-form/sign-up-form.component";    

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

export const SignIn = () => {
  useEffect(() => {
    const getResponse = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
        console.log(response.user);
      }
    };
    getResponse();
  }, []);

  const logGooglePopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGooglePopup}>Sign-in with Google Pop up</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign-in with Google Redirect
      </button>
      <SignUpForm />
    </div>
  );
};
