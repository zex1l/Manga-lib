import {useState, FormEvent} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { signInWithEmailAndPassword, User } from "firebase/auth";
import { auth } from '../../../store/store';

import './Login.scss'

interface IUser {
    email: string
    password: string
}

const Login = () => {
    const [user, setUser] = useState<IUser>({
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    const id = useParams()    
    console.log(id)
    const onSubmit = (e : FormEvent) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed in 
                const user : User = userCredential.user;
                user.getIdToken()
                    .then(res => localStorage.setItem('token', res))
                
                // ...
            })
            .catch((error) => {
                
                console.log( error.message)
            });
    }

    return (
        <div className='login'>
            <div className='container'>
                <form className='login__form' onSubmit={onSubmit}>
                    <input 
                        type="email" 
                        name='email'
                        onChange={e => setUser(user => ({...user, [e.target.name]: e.target.value}))}
                    />
                    <input 
                        type="password" 
                        name='password'
                        onChange={e => setUser(user => ({...user, [e.target.name]: e.target.value}))}
                    />
                    <button>Войти</button>
                </form>
            </div>
        </div>
    );
};

export default Login;