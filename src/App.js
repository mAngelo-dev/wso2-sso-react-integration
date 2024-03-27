import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { useAuthContext } from '@asgardeo/auth-react';
import './App.css';

function App() {
  const navigate = useNavigate(); // Antigo useHistory, utilizado para redirecionamento de rotas.
  const { state, signIn } = useAuthContext(); //  Resgata estado de autenticação e função de login

  useEffect(() => {
    // Redireciona para o dashboard caso o usuário esteja autenticado
    if (state.isAuthenticated) {
      navigate('/dashboard');
    }
  }, [state.isAuthenticated, navigate]);

  return (
    <div className="container">
      <h1>SSO WSO2 Identity Server</h1>
      {!state.isAuthenticated && (
        <button className="login-button" onClick={ () =>  signIn()}>
          Login
        </button>
      )}
    </div>
  );
}

export default App;
