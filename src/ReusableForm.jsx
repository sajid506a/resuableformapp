import { useState, useEffect } from 'react';
import { TextField, Checkbox, FormControlLabel, Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material';

function ReusableForm() {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchData('https://dummyjson.com/posts/1', setFormData);
  }, []);

  const handleChange = (event, fieldName) => {
    handleFormChange(event, fieldName, setFormData);
  };

  const handleSubmit = (event) => {
    handleFormSubmit(event, formData);
  };

  return (
    <>
      <h1>Reusable Dynamic form with MUI</h1>
      {renderForm(formData, handleChange, handleSubmit)}
    </>
  );
}

function fetchData(url, setState) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => setState(data));
}

function handleFormChange(event, fieldName, setFormData) {
  const { value, checked, type } = event.target;
  setFormData(prevFormData => ({
    ...prevFormData,
    [fieldName]: type === 'checkbox' ? checked : value
  }));
}

function handleFormSubmit(event, formData) {
  event.preventDefault();
  fetch('https://dummyjson.com/post/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function renderForm(formData, handleChange, handleSubmit) {
  let keys = Object.keys(formData);
  return (
    <form onSubmit={handleSubmit}>
      {keys.map((item) => (
        <div key={item}>
          {typeof formData[item] === 'string' || typeof formData[item] === 'number' ? (
            <TextField
              label={item}
              id={item}
              value={formData[item] || ''}
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => handleChange(e, item)}
            />
          ) : typeof formData[item] === 'boolean' ? (
            <FormControlLabel
              control={<Checkbox checked={formData[item] || false} id={item} onChange={(e) => handleChange(e, item)} />}
              label={item}
            />
          ) : Array.isArray(formData[item]) ? (
            <FormControl fullWidth margin="normal">
              <InputLabel id={`${item}-label`}>{item}</InputLabel>
              <Select
                labelId={`${item}-label`}
                id={item}
                value={formData[item] || ''}
                label={item}
                onChange={(e) => handleChange(e, item)}
              >
                {formData[item].map((option, index) => <MenuItem key={index} value={option}>{option}</MenuItem>)}
              </Select>
            </FormControl>
          ) : null}
        </div>
      ))}
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </form>
  );
}

export default ReusableForm;