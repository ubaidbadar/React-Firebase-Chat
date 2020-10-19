import { db, user } from '../../firebase/utility';
import axios from 'axios';
import { STORE_COUNTRIES, USER_STATE_CHANGED } from '../actionTypes';

const storeCountries = payload => ({ type: STORE_COUNTRIES, payload: payload });
const onUserStateChanged = user => ({ type: USER_STATE_CHANGED, payload: user })

const creatUserProfileDocument = (snapshot, user, countries) => {
    if (user) {
        if (!snapshot.exists) {
            const countryCode = user.phoneNumber.slice(1, user.phoneNumber.length - 10);
            const country = countries.data.find(({ callingCodes }) => callingCodes[0] === countryCode);

            user.countryName = country.name;
            user.countryFlag = country.flag;

            return db.doc(`users/${user.uid}`).set({
                phoneNumber: user.phoneNumber,
                countryFlag: country.flag,
                countryName: country.name,
            });
        }
        const userDetails = snapshot.data();
        user.countryName = userDetails.countryName;
        user.countryFlag = userDetails.countryFlag;
    }
}



const onAppStart = (user, onFinised, onError) => dispatch => {
    let countries;
    axios.get('https://restcountries.eu/rest/v2/all')
        .then(({ data }) => data.filter(({ callingCodes }) => callingCodes[0].length > 1 && callingCodes[0].length < 3))
        .then(couns => countries = couns)
        .then(() => dispatch(storeCountries(countries)))
        .then(() => db.doc(`users/${user.uid}`).get())
        .then(snapshot => creatUserProfileDocument(snapshot, user, countries))
        .then(() => dispatch(onUserStateChanged(user)))
        .then(onFinised)
        .catch(onError)
}

export default onAppStart;