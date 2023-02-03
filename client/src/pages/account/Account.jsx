import React from 'react';
import './account.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardImage,MDBBtn } from 'mdb-react-ui-kit';

export default function Account() {
  return (
    <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row " style={{ backgroundColor: '#fff', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" >
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                </div>
              </div>
              {/* <MDBCardText className='mt-4' style={{backgroundColor:"white",textColor:"black"}}>
                    Follow
              </MDBCardText> */}
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
              <div >
              {/* <div className="d-flex justify-content-left text-center py-1">
              <p>Harsha</p>
              </div> */}
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">253</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Photos</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">1026</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">478</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                  </div>
                </div>
              </div>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}