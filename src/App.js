import './App.css';
import {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import {firestore} from './firebase/connect';
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [time, setTime] = useState(0);
  const [password, setPassword] = useState('');
  const [members, setMembers] = useState([]);

  useEffect(() => {
    let localMembers = [];
    const collection = firestore.collection('members').get();
    collection.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        localMembers.push(doc.data())
      });
      setMembers(localMembers);
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  }, [])

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
    const collection = firestore.collection('members').where('name', '==', name);
    collection.get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          firestore.collection('members').doc(doc.id).set({
            name: doc.data().name,
            count: Number(time) + doc.data().count
          })
          .then(() => {
            setPassword('');
            setTime(0);
            setName('');
            history.push("/thanks");
          })
          .catch((error) => {
            console.log("Error setting documents: ", error);
          });
      })
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  }

  let isDisabled = !name || !time || (password !== process.env.REACT_APP_PASS_WORD);

  return (
        <>
        <div>
            <p>I am</p>
            <div><FormControl variant="outlined" className="white-font">
              <Select
                native
                value={name}
                onChange={handleChange}
                >
                <option value=""></option>
                {members.map((item, i) => {
                  return <option key={i} value={item.name}>{item.name}</option>
                })}
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
    </>
  );
}

export default App;
