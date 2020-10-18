import React, { useState } from 'react';
import Input from '../../ui/Input/Input';
import './PhoneNumber.scss';

const PhoneNumber = props => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const onPhoneNumberChange = ({ target }) => {
        const { value } = target;
        +value >= 0 && value.length < 11 && setPhoneNumber(value);
    }
    return (
        <div className='__phone-number __flex'>
            <select>

            </select>
            <Input type='text'
                fixValue='+92'
                name='phoneNumber'
                htmlFor='Phone Number'
                min={1}
                value={phoneNumber}
                onChange={onPhoneNumberChange}
            />
        </div>
    )
}

export default PhoneNumber;