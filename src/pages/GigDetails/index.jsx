//MDB
import { MDBCol, MDBBtn, MDBIcon } from "mdb-react-ui-kit";

//GigDetails
const GigDetails = () => {
  return (
    <div className="gig-details d-flex justify-content-center align-items-center my-5">
      <MDBCol size="12" md="10" lg="8" className="text-center">
        {/* logo */}
        <img
          src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp"
          className="rounded-circle mb-2"
          width={200}
          height={200}
          alt=""
          srcset=""
        />
        <h5 className="job-title text-dark">Full Stack Developer</h5>
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
        <div className="mb-2">
          <h6 className="mb-1 text-dark">Job Desc</h6>
          <small className="fw-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            perspiciatis, tempora et ea excepturi veritatis nisi amet omnis
            natus nihil est obcaecati qui dicta, vel eligendi saepe voluptas
            soluta ipsam quas a? Culpa.
          </small>
        </div>
        <div className="my-3">
            {/* send mail */}
        <a
          href="mailto:john@gmail.com"
          className="btn btn-danger contact-email text-danger text-white btn-block"
        >
          john@gmail.com
        </a>
        {/* client website/app url */}
        <a
          href="www.john.com"
          className="btn btn-primary wesite-url text-primary text-white btn-block"
        >
          www.john.com
        </a>
        </div>
      </MDBCol>
    </div>
  );
};

export default GigDetails;
