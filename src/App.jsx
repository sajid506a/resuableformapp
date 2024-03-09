import DynamicForm from './DynamicForm';
import DynamicFormMUI from './DynamicFormMUI';
import ReusableForm from './ReusableForm';

function App() {
      let formData = [
        { type: 'text', label: 'Name', name: 'name', placeholder: 'Enter your name' },
        { type: 'email', label: 'Email', name: 'email', placeholder: 'Enter your email' },
        { type: 'number', label: 'Age', name: 'age', min: 0, max: 150 },
        {
          type: 'select', label: 'Country', name: 'country', options: [
            { value: 'us', label: 'United States' },
            { value: 'ca', label: 'Canada' },
            { value: 'uk', label: 'United Kingdom' }
          ]
        },
        { type: 'checkbox', label: 'Accept Terms', name: 'terms' },
        { type: 'radio', label: 'Gender', name: 'gender', options: [
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' }
          ]
        },
        { type: 'date', label: 'Birthday', name: 'birthday' },
        { type: 'submit', label: 'Submit', action: 'submit' },
        { type: 'button', label: 'Cancel', action: 'cancel' }
      ]
  return (
    <>
      <ReusableForm />
      <h1>Dynamic Form</h1>
      <DynamicForm formData={formData}/>
      <h1>Dynamic Form MUI</h1>
      <DynamicFormMUI formData={formData}/>
    </>
  );
}

export default App;