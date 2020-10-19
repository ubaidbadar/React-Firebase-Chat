import React, { useState } from 'react';
import ReduxASYNC from '../hoc/ReduxASYNC';
import { getCountries } from '../store/actions/countries';
import PhoneNumber from '../components/Auth/PhoneNumber';
import Spinner from '../ui/Spinner/Spinner';
import { phoneNumberConfirmationHandler, signInWithPhoneNumber } from '../firebase/utility';
import OTP from '../components/Auth/OTP';

const AuthPage = props => {
    const [status, setStatus] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState(92);
    const [isRecapchaChecked, setIsRecapchaChecked] = useState(false);
    const [otp, setotp] = useState('');
    const [err, setError] = useState(null);


    const routeHandler = (status = '', err = null) => {
        setIsRecapchaChecked(false);
        setStatus(status);
        setError(err)
    }

    const onPhoneSubmit = e => {
        e.preventDefault();
        signInWithPhoneNumber(
            `+${countryCode}${phoneNumber}`,
            routeHandler,
            err => routeHandler('', err) ,
        );
    }

    const onOTPSubmit = e => {
        e.preventDefault();
        phoneNumberConfirmationHandler(
            otp,
            () => routeHandler('loading'),
            err => routeHandler('OTP', err)
        )
    }

    switch (status) {
        case 'OTP':
            return <OTP otp={otp}
                err={err}
                onOTPChange={otp => setotp(otp)}
                onOTPSubmit={onOTPSubmit}
                phoneNumber={`+${countryCode} ${phoneNumber}`}
                goBack={() => setStatus('Phone Number')}
            />
        case 'loading':
            return <Spinner />
        default:
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
    }
}

export default ReduxASYNC(AuthPage, 'countries', getCountries);