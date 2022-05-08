import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDm9aHGVg5ZjsrhUosPli3UvbJURQcbsWo",
  authDomain: "vuex-4-fb-auth-67dbb.firebaseapp.com",
  projectId: "vuex-4-fb-auth-67dbb",
  storageBucket: "vuex-4-fb-auth-67dbb.appspot.com",
  messagingSenderId: "569091051963",
  appId: "1:569091051963:web:224108d76d6ca87fd8f49e",
};

//init Firebase

initializeApp(firebaseConfig);

// init firebase auth

const auth = getAuth();
export { auth };
