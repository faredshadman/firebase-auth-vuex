import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
 your firebase config
};

//init Firebase

initializeApp(firebaseConfig);

// init firebase auth

const auth = getAuth();
export { auth };
