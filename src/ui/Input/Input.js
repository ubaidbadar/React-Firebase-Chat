import React from 'react';
import './Input.scss';

const Input = props => {
    return (
        <label className='__input-wrapper __f1 __words-no-wrap __relative __block'>
            <input className='__input'
                placeholder=' '
                autoComplete='off'
                {...props}
            />
            <span className='__absolute __label'>{props.htmlFor}</span>
        </label>
    )
}

export default Input;