import React, { useContext } from 'react';
import Button from '../components/UI/button/Button';
import Input from '../components/UI/input/Input';
import { AuthContext } from '../context';

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    };

    return (
        <div>
            <h1>Логин</h1>
            <form onSubmit={login}>
                <div><Input type="text" placeholder="Логин"/></div>
                <div><Input type="text" placeholder="Пароль"/></div>
                <Button>Войти</Button>
            </form>
        </div>
    );
};

export default Login;
