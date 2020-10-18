import React from 'react';
import './Input.scss';

const Input = props => (
    <label className='__input-wrapper __words-no-wrap __relative __block'>
        <input className='__input' placeholder=' ' autoComplete='off' {...props} />
        <span className='__absolute'>{props.htmlFor}</span>
    </label>
)

export default Input;