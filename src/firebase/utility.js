import firebase from './firebase';

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export const user = auth.currentUser;