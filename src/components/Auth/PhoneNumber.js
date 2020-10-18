import React, { useState } from 'react';
import Input from '../../ui/Input';
import './PhoneNumber.scss';

const PhoneNumber = props => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const onChange = ({ target }) => {
        const { value } = target;
        +value >= 0 && value.length < 11 && setPhoneNumber(value);
    }
    return (
        <div className='__phone-number'>
            <Input type='number'
                name='phoneNumber'
                htmlFor='Phone Number'
                min={1}
                value={phoneNumber}
                onChange={onChange}
            />
        </div>
    )
}

export default PhoneNumber;