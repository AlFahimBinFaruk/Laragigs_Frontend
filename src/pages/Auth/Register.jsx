//MDB Components
import { MDBInput, MDBCol, MDBBtn } from "mdb-react-ui-kit";

const Register = () => {
  return (
    <div className="d-flex vh-100 align-items-center justify-content-center">
      <MDBCol size="12" md="6" lg="4">
        <h5 className="text-center mb-0 text-dark">
          Register to Create an account
        </h5>
        <div className="my-3">
          <MDBInput
            className="mb-2"
            type="text"
            id="form1Example1"
            label="Username"
          />
          <MDBInput
            className="mb-2"
            type="email"
            id="form1Example1"
            label="Email address"
          />
          <MDBInput
            className="mb-2"
            type="password"
            id="form1Example2"
            label="Password"
          />
        </div>

        <p className="text-center fw-bold">
          <small>
            Don't Have an account?{" "}
            <span className="text-primary">Login</span>
          </small>
        </p>

        <MDBBtn type="submit" block>
          Register
        </MDBBtn>
      </MDBCol>
    </div>
  );
};

export default Register;
