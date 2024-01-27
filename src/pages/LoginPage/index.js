import React, { useState, useContext }  from "react";
import { AuthContext } from "../../contexts/auth";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

function Login() {
  const { authenticated, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("submit", { email, password });
      login(email, password);
  }

  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='login.jpg' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#87CEFA' }}/>
                <span className="h1 fw-bold mb-0">Informa Procuradoria</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Faça login em sua conta</h5>

              <form className="form" onSubmit={handleSubmit}>
                <MDBInput 
                  wrapperClass='mb-4' 
                  label='Email' 
                  id='email' 
                  type='email' 
                  size="lg"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                />

                <MDBInput 
                  wrapperClass='mb-4' 
                  label='Senha' 
                  id='password' 
                  type='password' 
                  size="lg"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                />

                <MDBBtn className="mb-4 px-5" size='lg' type="submit">Login</MDBBtn>
              </form>

              <a className="small text-muted" href="#!">Esqueceu a senha?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Não tem uma conta? <a href="/register" style={{color: '#393f81'}}>Registre-se aqui</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Termos de uso.</a>
                <a href="#!" className="small text-muted">Política de Privacidade</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;