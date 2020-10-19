import React from 'react';
import './Select.scss';

const Select = props => (
    <label className={`__select-field-wrapper __relative __block __words-no-wrap`}>
        <select {...props} className='__select'>
            {props.children}
        </select>
        <span className='__absolute __label'>{props.htmlFor}</span>
    </label>
)

export default Select;