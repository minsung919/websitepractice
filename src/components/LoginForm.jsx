import { useState } from 'react';
import axios from 'axios';

// function LoginForm ({ setIsLoggedIn }) {
function LoginForm (props) {
    const {styleData, setIsLoggedIn, setName} = props;
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    

    

    const handleLogin = async () => {
        try {
          const response = await axios.post('http://localhost:3000/token/login', { id, pwd });
          const { token , userName} = response.data;
          localStorage.setItem('jwt', token);
          setName(userName);
          setIsLoggedIn(true);
          alert('로그인 성공! 토큰이 저장되었습니다.');
        } catch (error) {
          alert('로그인 실패: ' + error);
        }
    };

    return (
        <div style={styleData}>
            <h2>Login</h2>
            <div>
            <input
                type="text"
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <br/>
            <input
                type="password"
                placeholder="Password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
            />

            </div>
            <button onClick={handleLogin}>로그인 하기</button>
            <hr/>
        </div>
        
    );
}


export default LoginForm;
