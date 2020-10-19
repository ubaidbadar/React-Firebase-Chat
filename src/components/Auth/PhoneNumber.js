import React, { useEffect } from 'react';
import { getRecapcha } from '../../firebase/utility';
import Input from '../../ui/Input/Input';
import Select from '../../ui/Select/Select';
import './PhoneNumber.scss';
import logo from '../../assets/logo.png';

const PhoneNumber = props => {
    const id = 'sign-in-recaptcha';

    const onPhoneNumberChange = ({ target }) => {
        const { value } = target;
        +value >= 0 && value.length < 11 && props.onPhoneNumberChanged(value);
    }

    useEffect(() => {
        getRecapcha(id, () => props.onRecaptchChanged(true), () => props.onRecaptchChanged(false));
    }, []);
    return (
        <div className='__phone-number __card __m-a'>
            <img alt='' src={logo} className='__m-a __mt-1 __block __logo' />
            <h2 className='__center'>Add your Phone Number</h2>
            <form onSubmit={props.onPhoneSubmit}>
                <div className='__flex'>
                    <div className='__mr-s'>
                        <Select htmlFor='Select' value={props.countryCode} onChange={props.onCountryChange}>
                            {props.countries.map(({ alpha2Code, callingCodes }, index) => <option key={index} value={callingCodes}> {alpha2Code} +{callingCodes} </option>)}
                        </Select>
                    </div>
                    <Input type='text'
                        name='phoneNumber'
                        htmlFor='Phone Number'
                        min={1}
                        value={props.phoneNumber}
                        onChange={onPhoneNumberChange}
                    />
                </div>
                <div id={id} className='__mt-1 __mb-1 __recaptcha'></div>
                <button className='__btn __large' disabled={!(props.phoneNumber.length === 10 && props.isRecapchaChecked)}>Login</button>
            </form>
        </div>
    )
}

export default PhoneNumber;