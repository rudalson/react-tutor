import firebase from 'firebase/app'
import 'firebase/firestore';

import firebaseConfig from './config/firebaseConfig'

firebase.initializeApp(firebaseConfig);

const firestore = new firebase.firestore();

export {firestore}

