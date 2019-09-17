import React from 'react';
import { Field } from 'redux-form';
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

export const createdField = (label, name, validators, component, props, typeInput) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field name={name} component={component} validate={validators} type={typeInput} />
        </div>
    )
}

export default Input;