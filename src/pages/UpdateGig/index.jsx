//mdb
import {
  MDBBtn,
  MDBCol,
  MDBInput,
  MDBProgress,
  MDBProgressBar,
  MDBTextArea,
} from "mdb-react-ui-kit";
//App components
import PrevLogo from "./components/PrevLogo";
//UpdateGig component
const UpdateGig = () => {
  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <MDBCol size="12" md="6" lg="4">
        {/* top */}
        <div className="top d-flex justify-content-between align-items-end mb-3">
          <h5 className="mb-0">
            Update Gig id:
            <span className="text-dark ms-1">123abcd</span>
          </h5>
        </div>
        {/* update form */}
        <div className="update-gig-form">
          <div className="mb-3">
            {/* company name */}
            <div className="mb-2">
              {/* prev-name */}
              <div className="prev-name">
                <small className="fw-bold">Company Previous Name:</small>

                <MDBInput
                  disabled
                  label="Fiverr.com"
                  size="sm"
                  className="mb-2"
                />
              </div>
              {/* new name */}
              <div className="new-name">
                <small className="fw-bold">Enter New Name:</small>
                <MDBInput
                  type="text"
                  placeholder="Enter Company New Name"
                  className="mb-2"
                  size="sm"
                />
              </div>
            </div>
            {/* job title */}
            <div className="mb-2">
              {/* prev-title */}
              <div className="prev-title">
                <small className="fw-bold">Previous Job Title:</small>
                <MDBInput disabled label="Web Dev" size="sm" className="mb-2" />
              </div>
              {/* new title */}
              <div className="new-name">
                <small className="fw-bold">Enter New Title:</small>
                <MDBInput
                  type="text"
                  placeholder="Enter New Job Name"
                  className="mb-2"
                  size="sm"
                />
              </div>
            </div>
            {/* job location */}
            <div className="mb-2">
              {/* prev-location */}
              <div className="prev-location">
                <small className="fw-bold">Previous Job Location:</small>
                <MDBInput disabled label="Remote" size="sm" className="mb-2" />
              </div>
              {/* new location */}
              <div className="new-name">
                <small className="fw-bold">Enter New Location:</small>
                <MDBInput
                  type="text"
                  placeholder="Enter New Job Location"
                  className="mb-2"
                  size="sm"
                />
              </div>
            </div>
            {/* contact email */}
            <div className="mb-2">
              {/* prev-email */}
              <div className="prev-email">
                <small className="fw-bold">Previous Contact Email:</small>
                <MDBInput
                  disabled
                  label="john@gmail.com"
                  size="sm"
                  className="mb-2"
                />
              </div>
              {/* new email */}
              <div className="new-email">
                <small className="fw-bold">Enter New Contact Email:</small>
                <MDBInput
                  type="text"
                  placeholder="Enter New Contact Email"
                  className="mb-2"
                  size="sm"
                />
              </div>
            </div>
            {/* website/app url */}
            <div className="mb-2">
              {/* prev-url */}
              <div className="prev-url">
                <small className="fw-bold">
                  Previous Website/Application URL:
                </small>
                <MDBInput
                  disabled
                  label="WebDev.com"
                  size="sm"
                  className="mb-2"
                />
              </div>
              {/* new url */}
              <div className="new-url">
                <small className="fw-bold">Enter New URL:</small>
                <MDBInput
                  type="text"
                  placeholder="Enter New URL"
                  className="mb-2"
                  size="sm"
                />
              </div>
            </div>
            {/* tags */}
            <div className="mb-2">
              {/* prev-tags */}
              <div className="prev-tags">
                <small className="fw-bold">Previous Tags:</small>
                <MDBInput
                  disabled
                  label="Web Dev,programming,development"
                  size="sm"
                  className="mb-2"
                />
              </div>
              {/* new tags */}
              <div className="new-tags">
                <small className="fw-bold">Enter New Tags:</small>
                <MDBInput
                  type="text"
                  placeholder="ex:x,y,z"
                  className="mb-2"
                  size="sm"
                />
              </div>
            </div>
            {/*company logo */}
            <div className="mb-2">
              {/* prev logo */}
              <div className="prev-logo">
                <small className="fw-bold">Previous Logo:</small>
                <PrevLogo />
                <p className="text-danger fw-bold text-center">
                  <small>Delete previous Logo to upload new Logo.</small>
                </p>
              </div>
              {/* select new logo */}
              {/* <div className="select-new-logo">
                    <small className="fw-bold">Select New Logo:</small>
                    <MDBInput type="file" size="sm" />
                  </div> */}
            </div>
            {/* job desc */}
            <div className="mb-2">
              {/* prev-desc */}
              <div className="prev-desc">
                <small className="fw-bold">Previous Job Desc:</small>
                <MDBTextArea
                  label="This is the old Job Description"
                  rows={4}
                  size="sm"
                  className="mb-2"
                  disabled
                />
              </div>
              {/* new desc */}
              <div className="new-desc">
                <small className="fw-bold">Enter New Job Desc:</small>
                <MDBTextArea
                  placeholder="Your new job desc."
                  className="md-2"
                  rows={4}
                  size="sm"
                />
              </div>
            </div>
          </div>
          {/* upload progress bar */}
          <MDBProgress className="mb-2">
            <MDBProgressBar
              bgColor="success"
              width="25"
              valuemin={0}
              valuemax={100}
            />
          </MDBProgress>
          {/* update  btn*/}
          <MDBBtn block className="rounded-0">
            Update
          </MDBBtn>
        </div>
      </MDBCol>
    </div>
  );
};

export default UpdateGig;
