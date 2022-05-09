//MDB components
import {
  MDBBtn,
  MDBCol,
  MDBInput,
  MDBTextArea,
  MDBProgress,
  MDBProgressBar,
} from "mdb-react-ui-kit";

const AddNewGig = () => {
  return (
    <div className="d-flex vh-100 align-items-center justify-content-center">
      <MDBCol size="12" md="6" lg="4">
        <div className="text-center text-dark">
          <h5 className="mb-0">Create a new gig</h5>
          <small className="fw-bold">Post a gig to find developer</small>
        </div>
        {/* add new gig form */}
        <div className="add-new-gig-form my-3">
          {/* company name */}
          <MDBInput
            type="text"
            label="Company Name"
            className="mb-2"
            size="sm"
          />
          {/*job title */}
          <MDBInput type="text" label="Job Title" className="mb-2" size="sm" />
          {/* job location */}
          <MDBInput
            type="text"
            label="Job Location"
            className="mb-2"
            size="sm"
          />
          {/* contact email */}
          <MDBInput
            type="text"
            label="Contact Email"
            className="mb-2"
            size="sm"
          />
          {/* wesite/application  url */}
          <MDBInput
            type="text"
            label="Website/Application URL"
            className="mb-2"
            size="sm"
          />
          {/* tags */}
          <MDBInput
            type="text"
            label="Tags(comma separated)"
            className="mb-2"
            size="sm"
          />
          {/* company logo */}
          <div className="mb-2">
            <small className="fw-bold">Company Logo</small>
            <MDBInput type="file" size="sm" />
          </div>
          {/* job desc */}
          <MDBTextArea
            label="Job Description"
            rows={4}
            className="mb-4"
            size="sm"
          />
          {/* file upload progress */}
          <MDBProgress>
            <MDBProgressBar width={75} valuemin={0} valuemax={100} />
          </MDBProgress>
        </div>
        {/* create btn */}
        <MDBBtn block>Create Gig</MDBBtn>
      </MDBCol>
    </div>
  );
};

export default AddNewGig;
