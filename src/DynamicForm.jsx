import React from 'react';

const labelStyle = {display: 'block', marginBottom: '20px'};
const inputStyle = {marginLeft: '10px'};
const formStyle = {padding: '20px', border: '1px solid #ccc', borderRadius: '5px'};
const buttonStyle = {marginTop: '20px'};

const FormElement = ({ type, label, name, options }) => {
    switch (type) {
        case 'text':
        case 'email':
        case 'number':
            return (
                <label style={labelStyle}>
                    {label}:
                    <input type={type} name={name} style={inputStyle} />
                </label>
            );
        case 'select':
            return (
                <label style={labelStyle}>
                    {label}:
                    <select name={name} style={inputStyle}>
                        {options.map((option, index) => (
                            <option value={option.value} key={index}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </label>
            );
        case 'checkbox':
            return (
                <label style={labelStyle}>
                    {label}:
                    <input type='checkbox' name={name} style={inputStyle} />
                </label>
            );
        case 'radio':
            return (
                <div style={labelStyle}>
                    {label}:
                    {options.map((option, index) => (
                        <label key={index}>
                            <input type='radio' name={name} value={option.value} style={inputStyle} />
                            {option.label}
                        </label>
                    ))}
                </div>
            );
        case 'date':
            return (
                <label style={labelStyle}>
                    {label}:
                    <input type='date' name={name} style={inputStyle} />
                </label>
            );
        case 'textarea':
            return (
                <label style={labelStyle}>
                    {label}:
                    <textarea name={name} style={inputStyle} />
                </label>
            );
        default:
            return null;
    }
};

const DynamicForm = ({ formData }) => {
    return (
        <form style={formStyle} onSubmit={(e) => e.preventDefault()}>
            {formData.map((formElement, index) => (
                <FormElement key={index} {...formElement} />
            ))}
            <button type='submit' style={buttonStyle}>Submit</button>
        </form>
    );
};

export default DynamicForm;