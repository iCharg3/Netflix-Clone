import React, {useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext} from '../context/firebase';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export function SignUpContainer(){
    const navigate = useNavigate();
    const { firebase } = useContext(FirebaseContext);
    const [firstName,setFirstName] = useState('');
    const [emailAddress,setEmailAddrress] = useState();
    const [password,setPassword] = useState();
    const [error,setError] = useState('');
    const [show,setShow] = useState(false);

    const isInvalid = firstName==='' || password === '' || emailAddress=== '';
    const handleSignUp = (event) => {
        event.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress,password)
            .then((result)=>
                result.user.updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random()*5) + 1,
                }) 
                    .then(() =>{
                        navigate(ROUTES.BROWSE);
                    })  
            )
            .catch((error) => {
                setEmailAddrress('');
                setPassword('');
                setFirstName('');
                setError(error.message);
            })
    }
    return (
        <Form>
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Base onSubmit={handleSignUp} method="POST">
                <Form.Input 
                    placeholder="First Name" 
                    value={firstName} 
                    onChange={({ target }) => setFirstName(target.value)}
                />
                <Form.Input 
                    placeholder="Email address" 
                    value={emailAddress} 
                    onChange={({ target }) => setEmailAddrress(target.value)}
                />
                <Form.Input 
                    type="password"
                    autoComplete="off"
                    placeholder="Password" 
                    value={password} 
                     onChange={({ target }) => setPassword(target.value)}
                />
                <Form.Submit disabled={isInvalid} type="submit">Sign Up</Form.Submit>
            </Form.Base>
            <Form.Text>
                Already a user?<Form.Link to="/signin"> Sign in now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.TextSmall>
            {!show && <Form.LinkText onClick={()=>setShow((show) => !show)}>Learn more.</Form.LinkText>}
            { show && <Form.LinkBody>
                The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).
            </Form.LinkBody>}
        </Form>
    )
}
