import { useState } from "react";
//MDB
import { MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";

//App compoanents
import Banner from "./components/Banner";
import SingleGigCard from "../../common_components/SingleGigCard";
//Home component
const Home = () => {
  const [count, setcount] = useState([1, 2, 34, 65]);
  return (
    <div className="home my-4">
      {/* banner */}
      <Banner />
      {/* gig list */}
      <div className="gig-list my-5">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="text-center text-dark mb-0">Gigs Available Now.</h4>
          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Search Gigs"
              aria-label="Search"
            />
            <MDBBtn color="primary">Search</MDBBtn>
          </form>
        </div>
        <MDBRow className="gy-3 my-2">
          {count.map((i) => {
            return (
              <MDBCol size="12" lg="6">
                <SingleGigCard />
              </MDBCol>
            );
          })}
        </MDBRow>
      </div>
    </div>
  );
};

export default Home;
