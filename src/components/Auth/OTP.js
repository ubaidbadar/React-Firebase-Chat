import React, { Fragment, useMemo } from 'react';
import Input from '../../ui/Input/Input';
import logo from '../../assets/logo.png';
import './OTP.scss'

const OTP = ({ otp, phoneNumber, onOTPChange, onOTPSubmit, err, goBack }) => {
    const onChange = e => {
        const { value } = e.target;
        value.length < 7 && +value >= 0 && onOTPChange(value);
    }
    return (
        <form className='__card __m-a __OTP' onSubmit={onOTPSubmit}>
            {useMemo(() => (
                <Fragment>
                    <div className='__goBack' onClick={goBack}></div>
                    <img alt='' src={logo} className='__logo __block __mt-1 __mb-1 __ml-a __mr-a' />
                </Fragment>
            ), [])}
            <Input name='otp' value={otp} htmlFor='OTP' onChange={onChange} />
            <p className='__small-font'>
                {useMemo(() => (
                    <span>
                        We have sent 6-digits number on your mobile <br /> phone: <b>{phoneNumber}</b>
                    </span>
                ), [])}
                {useMemo(() => err && <span className='__danger'>{err.message}</span>, [err])}
            </p>
            <button className='__btn __block __mt-4 __large' disabled={otp.length !== 6}>Sumbit</button>
        </form>
    )
}

export default OTP;