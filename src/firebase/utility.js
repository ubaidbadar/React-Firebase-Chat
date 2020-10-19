import firebase from './firebase';

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export const user = auth.currentUser;

export const getRecapcha = (id, cb, errcb) => new firebase.auth.RecaptchaVerifier(id, {
    'callback': cb,
    'expired-callback': errcb,
});