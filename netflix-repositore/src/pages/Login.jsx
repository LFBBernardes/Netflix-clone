import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/netflix-bg.jpg'; 

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background-color: rgba(28, 28, 28, 0.85);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #e50914;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f6121d;
  }
`;

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Login</h2>
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Button type="submit">Sign In</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
