// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHybPqWIypCJSjVW_zuZeAdxMmg6nVmCA",
    authDomain: "lostnotdead-a30a5.firebaseapp.com",
    projectId: "lostnotdead-a30a5",
    storageBucket: "lostnotdead-a30a5.appspot.com",
    messagingSenderId: "764839945109",
    appId: "1:764839945109:web:0e6cbba4ea1f210f810c9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;