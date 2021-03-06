import React from 'react';

const FieldNumber = props => {
    const {max, sizeClass, marginClass, width, disabled} = props;
    const {touched, error} = props.meta;
    const hasError = touched && error;

    return (
            <div className={`input-group form-group ${marginClass ? marginClass : ''}`} style={{width: width}} title={props.input.value ? props.input.value : ''}>
                <input type="number" min="0" max={max}
                       placeholder={props.placeholder}
                       className={`form-control ${sizeClass ? sizeClass : ''} ${!touched ? '' : error ? 'is-invalid': 'is-valid'}`}
                       onChange={e => props.input.onChange(e)}
                       value={props.input.value} disabled={disabled}
                />
                {hasError && <div className="invalid-feedback">{error}</div>}
            </div>
    );
};

export default FieldNumber;