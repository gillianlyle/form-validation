import React, {useState} from 'react';

const App = () => {

  const [value, setValue] = useState({});
  const handleChange = event => setValue(event.target.value)

  const onSubmit = event => { 
    event.preventDefault(); // prevent default action
  } 

  return (
    <div className="App">
        <form onSubmit={onSubmit} noValidate>
          <label>Name: <input type="text" name="name" onChange={handleChange} value={value.name} required /></label>
          <label>Email: <input type="email" name="email" onChange={handleChange} value={value.email} required /></label>
          <input type="submit" value="Submit" />
        </form>
    </div>
  );
}

export default App;
