import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRadio
}
from 'mdb-react-ui-kit';

function Register() {
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

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Faça seu cadastro com a conta SGP</h5>

                <MDBInput wrapperClass='mb-4' label='Nome Completo' id='typeText' type='text' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Email' id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Senha' id='formControlLg' type='password' size="lg"/>
                <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Procuradores' />
                <MDBRadio name='flexRadioDefault' id='flexRadioDefault2' label='Acessores' defaultChecked />

              <MDBBtn className="mb-4 px-5" size='lg'>Cadastrar</MDBBtn>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Register;