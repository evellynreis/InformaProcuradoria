import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
}
from 'mdb-react-ui-kit';

function StartPage() {

  return (
    <div className="App">
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='home.jpg' alt="home form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{fontSize: '3em'}}>
                Bem Vindo ao <br />
                <span className="text-primary">Informa Procuradoria</span>
              </h1>

              <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
                Nós da Informa Procuradoria, auxiliamos e coletamos informações dos principais portais jurídicos de Sergipe.
              </p>

              <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
                Escolha o tema de seu interesse, para receber em seu e-mail todas as novidades!
              </p>
        
              <MDBBtn className="mb-4 px-5" size='lg' href="/login">Entrar</MDBBtn>
              <MDBBtn className="mb-4 px-5" size='lg' href="/register">Cadastrar com conta do SGP</MDBBtn>

              
            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>

    </div>
  );
}

export default StartPage;