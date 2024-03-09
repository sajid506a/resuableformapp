import React, { useMemo } from 'react';

const useStyle = () => useMemo(() => ({
    labelStyle: {display: 'block', marginBottom: '20px'},
    inputStyle: {marginLeft: '10px'},
    formStyle: {padding: '20px', border: '1px solid #ccc', borderRadius: '5px'},
    buttonStyle: {marginTop: '20px'}
}), []);

const FormElement = ({ type, label, name, options }) => {
    const { labelStyle, inputStyle } = useStyle();
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
    const { formStyle, buttonStyle } = useStyle();
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