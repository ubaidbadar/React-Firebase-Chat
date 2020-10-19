import React, { useState } from 'react';
import ReduxASYNC from '../hoc/ReduxASYNC';
import { getCountries } from '../store/actions/countries';
import PhoneNumber from '../components/Auth/PhoneNumber';
import Spinner from '../ui/Spinner/Spinner';
import { signInWithPhoneNumber } from '../firebase/utility';
import OTP from '../components/Auth/OTP';

const AuthPage = props => {
    const [status, setStatus] = useState('initial');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState(92);
    const [isRecapchaChecked, setIsRecapchaChecked] = useState(false);
    const [otp, setotp] = useState('');
    const [err, setError] = useState({});

    const onPhoneSubmit = e => {
        e.preventDefault();
        signInWithPhoneNumber(
            `+${countryCode}${phoneNumber}`,
            () => setIsRecapchaChecked(false),
            () => setStatus('OTP'),
            err => setError(err)
        );
    }

    const onOTPSubmit = e => {
        e.preventDefault();
    }

    switch (status) {
        case 'initial':
            return <PhoneNumber phoneNumber={phoneNumber}
                err={err}
                countryCode={countryCode}
                onPhoneSubmit={onPhoneSubmit}
                countries={props.data}
                onCountryChange={e => setCountryCode(e.target.value)}
                onPhoneNumberChanged={phoneNumber => setPhoneNumber(phoneNumber)}
                isRecapchaChecked={isRecapchaChecked}
                onRecaptchChanged={isChecked => setIsRecapchaChecked(isChecked)}
            />
        case 'loading':
            return <Spinner />
        default:
            return <OTP otp={otp}
                onOTPChange={otp => setotp(otp)}
                onOTPSubmit={onOTPSubmit}
            />
    }
}

export default ReduxASYNC(AuthPage, 'countries', getCountries);