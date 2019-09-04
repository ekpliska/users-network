import React from 'react';
import StyleForm from './FormElements.module.css';

const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? `${StyleForm.formControl} ${StyleForm.error}` : StyleForm.formControl }>
            <input {...input} {...props} />
            {
                hasError && <span>{meta.error}</span>
            }
        </div>
    )
}

export default Input;