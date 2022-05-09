//MDB
import {
  MDBCard,
  MDBIcon,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";

//SingleGigCard component
const SingleGigCard = () => {
  return (
    <MDBCard className="h-100 rounded-0 shadow">
      <MDBRow className="g-0">
        <MDBCol md="4">
          <MDBCardImage
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp"
            alt="..."
            fluid
          />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <h5 className="job-title">Full Stack Developer</h5>
            <h6 className="company-name">Shelby company limited</h6>
            <div className="tags">
              <MDBBtn rounded size="sm" color="dark" className="m-2 ms-0">
                Some
              </MDBBtn>
              <MDBBtn rounded size="sm" color="dark" className="m-2 ms-0">
                Some
              </MDBBtn>
              <MDBBtn rounded size="sm" color="dark" className="m-2 ms-0">
                Some
              </MDBBtn>
              <MDBBtn rounded size="sm" color="dark" className="m-2 ms-0">
                Some
              </MDBBtn>
            </div>
            <p className="location">
              <MDBIcon fas icon="map-marker-alt" />
              <small className="text-muted ms-2">Wonka road,Germany</small>
            </p>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
};

export default SingleGigCard;
