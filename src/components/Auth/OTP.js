import React from 'react';
import Input from '../../ui/Input/Input';
import logo from '../../assets/logo.png';
import './OTP.scss'

const OTP = props => {
    const onChange = e => {
        const { value } = e.target;
        value.length < 7 && +value >= 0 && props.onOTPChange(value);
    }
    return (
        <form className='__card __m-a __OTP' onSubmit={props.onOTPSubmit}>
            <img alt='' src={logo} className='__logo __block __mt-1 __mb-1 __ml-a __mr-a' />
            <Input name='otp' value={props.otp} htmlFor='OTP' onChange={onChange} />
            <p className='__small-font'>
                We have sent 6-digits number on mobile number <br />
                <span className='__primary'>Send again</span>
            </p>
            <button className='__btn __block __mt-4 __large' disabled={props.otp.length !== 6}>Sumbit</button>
        </form>
    )
}

export default OTP;