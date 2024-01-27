import React  from "react";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
        <NavBar/>
        <MDBTable align='middle'>
        <MDBTableHead>
            <tr>
            <th scope='col'>Responsável</th>
            <th scope='col'>Processos</th>
            <th scope='col'>Código</th>
            <th scope='col'>Ação</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
            <tr>
            <td>
                <div className='d-flex align-items-center'>
                <div className='ms-3'>
                    <p className='fw-bold mb-1'>John Doe</p>
                    <p className='text-muted mb-0'>john.doe@gmail.com</p>
                </div>
                </div>
            </td>
            <td>
                <p className='fw-normal mb-1'>Processo 1</p>
            </td>
            <td>
                <MDBBadge color='success' pill>
                Código 1
                </MDBBadge>
            </td>
            <td>
                <MDBBtn color='link' rounded size='sm'>
                Editar
                </MDBBtn>
            </td>
            </tr>
            <tr>
            <td>
                <div className='d-flex align-items-center'>
                <div className='ms-3'>
                    <p className='fw-bold mb-1'>Alex Ray</p>
                    <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                </div>
                </div>
            </td>
            <td>
                <p className='fw-normal mb-1'>Processo 2</p>
            </td>
            <td>
                <MDBBadge color='primary' pill>
                Código 2
                </MDBBadge>
            </td>
            <td>
                <MDBBtn color='link' rounded size='sm'>
                Editar
                </MDBBtn>
            </td>
            </tr>
            <tr>
            <td>
                <div className='d-flex align-items-center'>
                <div className='ms-3'>
                    <p className='fw-bold mb-1'>Kate Hunington</p>
                    <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
                </div>
                </div>
            </td>
            <td>
                <p className='fw-normal mb-1'>Processo 3</p>
            </td>
            <td>
                <MDBBadge color='warning' pill>
                Código 3
                </MDBBadge>
            </td>
            <td>
                <MDBBtn color='link' rounded size='sm'>
                Editar
                </MDBBtn>
            </td>
            </tr>
        </MDBTableBody>
        </MDBTable>

        <Footer/>
    </>
    
  );
}