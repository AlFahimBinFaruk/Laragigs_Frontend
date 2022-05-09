//MDB components
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

//Prev company logo
const PrevLogo = () => {
  return (
    <div className="prev-logo my-3 d-flex  justify-content-between align-items-center">
      {/* content */}
      <div className="content col-10">
        <img
          src="https://th.bing.com/th/id/OIP.iN7b7OveHW9aSx611Yh0owHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7"
          width={200}
          height={200}
          className="rounded-circle"
          alt="Fissure in Sandstone"
        />
      </div>
      {/* content delete btn */}
      <MDBBtn floating color="danger" size="sm">
        <MDBIcon fas icon="trash" role="button" size="sm" />
      </MDBBtn>
    </div>
  );
};

export default PrevLogo;
