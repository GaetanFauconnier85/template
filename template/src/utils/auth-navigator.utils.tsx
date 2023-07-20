import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {createContext, useEffect, useState} from 'react';
import SignInStackUtils from './sign-in-stack.utils';
import SignOutStackUtils from './sign-out-stack.utils';

export const AuthContext = createContext<FirebaseAuthTypes.User | undefined>(
  undefined,
);

const AuthNavigatorUtils = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  function onAuthStateChanged(result: any) {
    setUser(result);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const authSubscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return authSubscriber;
  });

  if (initializing) {
    return null;
  }

  return user ? (
    <AuthContext.Provider value={user}>
      <SignInStackUtils />
    </AuthContext.Provider>
  ) : (
    <SignOutStackUtils />
  );
};

export default AuthNavigatorUtils;
