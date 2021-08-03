import { Button, TextField } from '@material-ui/core';
import React, { useEffect ,  useState , useCallback } from 'react';
import './Admin.css';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';
import { setLoggedIn } from '../store/store';
import API from '../Api/API';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '25ch',
      },
    },
  }));



const Admin = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [message, setMessage] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const Token = sessionStorage.getItem('Token')
        if (Token) {
          setLoggedIn()
          navigate('/Admin-dashbord')
        }
      }, )
      const loggedIn = useCallback(() =>
        dispatch(setLoggedIn()), [dispatch])

      const navigate = (path) => {
        history.push(path)
      }
    const submit = () => {
        const data = { username, password }
    API.post('/api/Signin', data)
      .then((ok) => {
        if (ok.data.error === true) {
          return setMessage(ok.data.message)
        } else {
          loggedIn();
          sessionStorage.setItem('token', ok.data.Token);
          sessionStorage.setItem('Username', ok.data.username);
          navigate('/Admin-dashbord')

        }
      })
      .catch((err) => {
        console.log(err)
      })
    }
   



    const classes = useStyles();
    return (
        <>
        
            <div className="Admin-Page">
            
                 <form className =" Admin-Form ">
                        <TextField 
                         className={classes.root} 
                         id="outlined-basic" label="Username" variant="outlined"
                         value={username}
                         onChange={(event) => setUsername(event.target.value)}
                         />
                        <TextField 
                        className={classes.root}  id="outlined-basic"
                         label="Password"type="password" variant="outlined"
                         value={password}
                         onChange={(event) => setPassword(event.target.value)}
                         />
                        <Button  onClick ={submit} variant="outlined">Login</Button>
                 </form>
                 {message && (<div className="Message-Password">
                 <Alert variant="filled" severity="error">
                     {message}
                </Alert>
                 </div>)}
            </div>
        </>
    )
}

export default Admin
