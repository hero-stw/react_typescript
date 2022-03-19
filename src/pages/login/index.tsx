import React, { Fragment } from 'react';
// Fragment là 1 thẻ rỗng

type LoginProps = {
    viewName?: string,
    username: string,
    password: string
};

function Login(props: LoginProps) {
    const {
        viewName = 'Login',
        username,
        password
    } = props;

    const [userName, setUserName] = React.useState<string>('');
    const [passwordValue, setPasswordValue] = React.useState<string>('');
    console.log(userName, passwordValue);
    const onSubmit = (): any => {
        const data = {
            username: userName,
            password: passwordValue
        }
    }
    return (
        <>
            <p>{viewName}</p>
            <p>Username: {username}</p>
            <p>Password: {password}</p>
            <form action="">
                <input type="text" placeholder='username'
                    onChange={(e) => setUserName(e.target.value)} />
                <input type="password" placeholder='password'
                    onChange={(e) => setPasswordValue(e.target.value)} />
                <button type="button" onSubmit={() => onSubmit()}>Login</button>
            </form>
        </>
        // <Fragment>
        //     <p>{viewName}</p>
        //     <p>Username: {username}</p>
        // </Fragment>
    );
}

// Export
export const USER_LOGIN = 'tuannda3';
export const USER_REGISTER = 'abcde';
// {USER_LOGIN, USER_REGISTER}
// Import {USER_LOGIN} from './pages/login'

// Default: 1 file chi duoc default 1 thang
// Khi import se khong can dung ngoac
export default Login;
