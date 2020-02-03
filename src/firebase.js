import app from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

import firebaseConfig from './config/firebaseConfig'

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.firestore = app.firestore();
        this.auth = app.auth();
    }

    doSignInWithEmailAndPassword(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }
}

export default new Firebase();

