import React, { Fragment, useEffect, useMemo } from 'react';
import { getRecapcha } from '../../firebase/utility';
import Input from '../../ui/Input/Input';
import Select from '../../ui/Select/Select';
import './PhoneNumber.scss';
import logo from '../../assets/logo.png';
import { useSelector } from 'react-redux';

const PhoneNumber = ({
    phoneNumber,
    onPhoneNumberChanged,
    countryCode,
    onCountryChange,
    isRecapchaChecked,
    onRecaptchChanged,
    onPhoneSubmit,
    err
}) => {
    const id = 'sign-in-recaptcha';
    const countries = useSelector(({ countries }) => countries);
    const onPhoneNumberChange = e => {
        const { value } = e.target;
        +value >= 0 && value.length < 11 && onPhoneNumberChanged(value);
    }
    
    useEffect(() => {
        getRecapcha(id, () => onRecaptchChanged(true), () => onRecaptchChanged(false));
    }, []);
    return (
        <div className='__phone-number __card __m-a'>
            {useMemo(() => (
                <Fragment>
                    <img alt='' src={logo} className='__m-a __mt-1 __block __logo' />
                    <h2 className='__center'>Add your Phone Number</h2>
                </Fragment>
            ), [])}
            <form onSubmit={onPhoneSubmit}>
                <div className='__flex'>
                    {useMemo(() => (
                        <div className='__mr-s'>
                            <Select htmlFor='Select' value={countryCode} onChange={onCountryChange}>
                                {countries.map(({ alpha2Code, callingCodes }, index) => <option key={index} value={callingCodes}> {alpha2Code} +{callingCodes} </option>)}
                            </Select>
                        </div>
                    ), [countryCode])}
                    {useMemo(() => (
                        <Input type='text'
                            name='phoneNumber'
                            htmlFor='Phone Number'
                            min={1}
                            value={phoneNumber}
                            onChange={onPhoneNumberChange}
                        />
                    ), [phoneNumber])}
                </div>
                <div id={id} className='__recaptcha'></div>
                {useMemo(() => err && <p className='__danger __small-font'>{err.message}</p>, [err])}
                <button className='__btn __large' disabled={!(phoneNumber.length === 10 && isRecapchaChecked)}>Login</button>
            </form>
        </div>
    )
}

export default PhoneNumber;