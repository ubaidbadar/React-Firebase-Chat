import React, { useState, useEffect } from 'react';
import { getRecapcha } from '../../firebase/utility';
import Input from '../../ui/Input/Input';
import Select from '../../ui/Select/Select';
import './PhoneNumber.scss';

const PhoneNumber = ({ countries }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState({});
    const [isRecapchaChecked, setIsRecapchaChecked] = useState(false);
    const onPhoneNumberChange = ({ target }) => {
        const { value } = target;
        +value >= 0 && value.length < 11 && setPhoneNumber(value);
    }
    
    const id = 'sign-in-recaptcha';

    useEffect(() => {
        getRecapcha(id, () => setIsRecapchaChecked(true), () => setIsRecapchaChecked(false));
        const country = countries.find(({ callingCodes }) => callingCodes[0] === "92");
        setCountry(country);
    }, [countries]);
    return (
        <div className='__phone-number'>
            <h2 className='__center'>Add your Phone Number</h2>
            <form>
                <div className='__flex'>
                    <div className='__mr-s'>
                        <Select htmlFor='Select' value={country.callingCodes} onChange={({ target }) => setCountry(target.value)}>
                            {countries.map(({ alpha2Code, callingCodes }, index) => <option key={index} value={callingCodes}> {alpha2Code} +{callingCodes} </option>)}
                        </Select>
                    </div>
                    <Input type='text'
                        icon={country.flag}
                        name='phoneNumber'
                        htmlFor='Phone Number'
                        min={1}
                        value={phoneNumber}
                        onChange={onPhoneNumberChange}
                    />
                </div>
                <div id={id} className='__mt-1 __mb-1'></div>
                <button className='__btn __large' disabled={!(phoneNumber.length === 10 && isRecapchaChecked)}>Login</button>
            </form>
        </div>
    )
}

export default PhoneNumber;