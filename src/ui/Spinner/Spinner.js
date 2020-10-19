import React from 'react';
import './Spinner.scss';

const Spinner = ({ fontSize = '0.8em', blur = false }) => (
    <div className={blur ? '__blur __row' : '__m-a'}>
        <div className="lds-ring __m-a" style={{ fontSize }}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
)

export default Spinner;