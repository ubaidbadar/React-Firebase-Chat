import firebase from './firebase';

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export const user = auth.currentUser;

export const getRecapcha = (id, cb, errcb) => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(id, {
        'callback': cb,
        'expired-callback': errcb,
    });
    window.recaptchaVerifier.render();
}

export const signInWithPhoneNumber = (phoneNumber, onStart, onFinished, onError) => {
    onStart();
    auth.signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier)
        .then(confirmationResult => window.confirmationResult = confirmationResult)
        .then(onFinished)
        .catch(onError);
}