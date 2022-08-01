import React, {useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext} from '../context/firebase';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export function FormContainer(){
    const navigate = useNavigate();
    const { firebase } = useContext(FirebaseContext);
    const [emailAddress,setEmailAddrress] = useState();
    const [password,setPassword] = useState();
    const [error,setError] = useState('');
    const [show,setShow] = useState(false);

    const isInvalid = password === '' || emailAddress=== '';
    const handleSignIn = (event) => {
        event.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress,password)
            .then(() =>{
                navigate(ROUTES.BROWSE);
            }) 
            .catch((error) =>{
                setEmailAddrress('');
                setPassword('');
                setError(error.message);
            })
    }
    return (
        <Form>
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Base onSubmit={handleSignIn} method="POST">
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
                <Form.Submit disabled={isInvalid} type="submit">Sign In</Form.Submit>
            </Form.Base>
            <Form.Text>
                New to Netflix?<Form.Link to="/signup"> Sign up now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.TextSmall>
            {!show && <Form.LinkText onClick={()=>setShow((show) => !show)}>Learn more.</Form.LinkText>}
            { show && <Form.LinkBody>
                The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).
            </Form.LinkBody>}
        </Form>
    )
}


