import React from 'react';
import { TextField, FormControl, InputLabel, MenuItem, Select, FormGroup, FormControlLabel, Checkbox, RadioGroup, Radio, TextareaAutosize, Button } from '@mui/material';

const formControlStyle = {marginBottom: '20px'};

const FormElement = ({ type, label, name, options }) => {
    switch (type) {
        case 'text':
        case 'email':
        case 'number':
            return (
                <TextField label={label} type={type} name={name} variant="outlined" fullWidth />
            );
        case 'select':
            return (
                <FormControl fullWidth style={formControlStyle}>
                    <InputLabel>{label}</InputLabel>
                    <Select label={label} name={name}>
                        {options.map((option, index) => (
                            <MenuItem value={option.value} key={index}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            );
        case 'checkbox':
            return (
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label={label} name={name} />
                </FormGroup>
            );
        case 'radio':
            return (
                <FormControl component="fieldset" style={formControlStyle}>
                    <RadioGroup name={name}>
                        {options.map((option, index) => (
                            <FormControlLabel value={option.value} control={<Radio />} label={option.label} key={index} />
                        ))}
                    </RadioGroup>
                </FormControl>
            );
        case 'date':
            return (
                <TextField type='date' label={label} name={name} InputLabelProps={{ shrink: true }} variant="outlined" fullWidth />
            );
        case 'textarea':
            return (
                <TextareaAutosize
                    minRows={3}
                    placeholder={label}
                    style={{ width: '100%' }}
                    name={name}
                />
            );
        default:
            return null;
    }
};

const DynamicFormMUI = ({ formData }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            {formData.map((formElement, index) => (
                <FormElement key={index} {...formElement} />
            ))}
            <Button type='submit' variant="contained" color="primary">Submit</Button>
        </form>
    );
};

export default DynamicFormMUI;