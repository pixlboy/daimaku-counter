import './App.css';
import {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import NavBar from './NavBar';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

function App() {
  const [name, setName] = useState('');
  const [time, setTime] = useState();
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleInput = (event) => {
    setTime(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }
  
  const handleSubmit = () => {
    console.log(name, time);
  }

  let isDisabled = !name || !time || !password;

  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <div>
            <p>I am</p>
            <div><FormControl variant="outlined" className="white-font">
              <Select
                native
                value={name}
                onChange={handleChange}
                >
                <option value=""></option>
                <option value="olivier">Olivier</option>
                <option value="kevin">Kevin</option>
              </Select>
            </FormControl>
            </div>
            <p>and I want to contribute</p>
            <TextField variant="outlined" type="number" value={time} onChange={handleInput} placeholder="Count in minutes" className="time-input" />
            <p>minutes towards March 16th Campaign.</p>
        </div>
        <div className="footer">
        <TextField variant="outlined" type="password" value={password} onChange={handlePassword} placeholder="Password" className="custom-input" />
        <Button variant="contained" onClick={handleSubmit} color="primary" disabled={isDisabled}>Contribute</Button>
        </div>
              </div>
    </>
  );
}

export default App;
