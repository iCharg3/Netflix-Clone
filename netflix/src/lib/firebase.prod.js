import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyA5PKomoT1Jkp0wjaby1xBf8mgwNdSfJbg",
    authDomain: "netflix-clone-6f00d.firebaseapp.com",
    projectId: "netflix-clone-6f00d",
    storageBucket: "netflix-clone-6f00d.appspot.com",
    messagingSenderId: "639981655669",
    appId: "1:639981655669:web:8fc237d37b08f51f930a3c"
};

const firebase = Firebase.initializeApp(config);

export { firebase };