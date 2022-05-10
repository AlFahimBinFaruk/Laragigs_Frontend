import { useState } from "react";
//MDB
import { MDBBtn, MDBRow, MDBCol } from "mdb-react-ui-kit";
//App components
import SingleGigCard from "../../common_components/SingleGigCard";

//ManageGigs component
const ManageGigs = () => {
  const [count, setcount] = useState([1, 2, 34, 65]);
  return (
    <div className="manage-gigs mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h5>Manage Your Gigs</h5>
        <MDBBtn size="sm">Add Gig</MDBBtn>
      </div>
      {/* gig list (gigs created by a specif user) */}
      <MDBRow className="gy-3 my-3">
        {count.map((i) => {
          return (
            <MDBCol size="12" lg="6">
              <SingleGigCard managegigs/>
            </MDBCol>
          );
        })}
      </MDBRow>
    </div>
  );
};

export default ManageGigs;
