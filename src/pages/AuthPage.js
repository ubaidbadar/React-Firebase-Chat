import React, { useState } from 'react';
import ReduxASYNC from '../hoc/ReduxASYNC';
import { getCountries } from '../store/actions/countries';
import PhoneNumber from '../components/Auth/PhoneNumber';
import Spinner from '../ui/Spinner/Spinner';
import { signInWithPhoneNumber } from '../firebase/utility';

const AuthPage = props => {
    const [status, setStatus] = useState('initial');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState(92);
    const [isRecapchaChecked, setIsRecapchaChecked] = useState(false);

    const onPhoneSubmit = e => {
        e.preventDefault();
        setIsRecapchaChecked(false);
        signInWithPhoneNumber( `+${countryCode}${phoneNumber}`)
    }

    switch (status) {
        case 'initial':
            return <PhoneNumber
                onPhoneSubmit={onPhoneSubmit}
                countryCode={countryCode}
                countries={props.data}
                onCountryChange={e => setCountryCode(e.target.value)}
                phoneNumber={phoneNumber}
                onPhoneNumberChanged={phoneNumber => setPhoneNumber(phoneNumber)}
                isRecapchaChecked={isRecapchaChecked}
                onRecaptchChanged={isChecked => setIsRecapchaChecked(isChecked)}
            />
        case 'loading':
            return <Spinner />
        default:
            return null
    }
}

export default ReduxASYNC(AuthPage, 'countries', getCountries);