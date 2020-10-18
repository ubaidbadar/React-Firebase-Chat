import React from 'react';
import './Input.scss';

const Input = props => {
    const { fixValue } = props;
    const inputStyle = {
        paddingLeft: fixValue.length - 0.6 + 'em'
    }
    return (
        <label className={`__input-wrapper __f1 __words-no-wrap __relative __block ${fixValue ? '__fixValueWrapper' : ''}`}>
            <span className='__absolute __fixValue'>{props.fixValue}</span>
            <input className='__input'
                placeholder=' '
                autoComplete='off'
                {...props}
                style={fixValue && inputStyle}
            />
            <span className='__absolute __label'>{props.htmlFor}</span>
        </label>
    )
}

export default Input;