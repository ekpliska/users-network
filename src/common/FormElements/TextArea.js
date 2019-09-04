import React from 'react';
import StyleForm from './FormElements.module.css';

const TextArea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? `${StyleForm.formControl} ${StyleForm.error}` : StyleForm.formControl }>
            <textarea {...input} {...props} />
            {
                meta.touched &&
                    ((meta.error && <span>{meta.error}</span>) ||
                    (meta.warning && <span>{meta.warning}</span>))
            }
        </div>
    )
}

export default TextArea;