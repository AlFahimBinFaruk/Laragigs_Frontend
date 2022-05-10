//mdb
import { MDBBtn, MDBCol, MDBIcon, MDBInput } from "mdb-react-ui-kit";

//account settings components
const AccountSettings = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <MDBCol size="12" md="6" lg="4">
        {/* top */}
        <div className="top d-flex justify-content-between align-items-baseline mb-2">
          <h6>Account Settings</h6>
          {/* logout btn */}
          <MDBIcon fas icon="sign-in-alt" role="button" />
        </div>
        {/* account settings form */}
        <div className="account-settings-form">
          {/* username */}
          <div className="mb-3">
            {/* old */}
            <MDBInput label="John Doe" disabled className="mb-2" />
            {/* new */}
            <MDBInput type="text" label="New Username" />
          </div>
          {/* email */}
          <div className="mb-3">
            {/* old */}
            <MDBInput label="John@gmail.com" disabled className="mb-2" />
            {/* new */}
            <MDBInput type="email" label="New Email" />
          </div>
          {/* password */}
          <div className="mb-3">
            {/* new */}
            <MDBInput type="password" label="New Password" />
          </div>
          {/* handle submit btn */}
          <MDBBtn block>Update</MDBBtn>
        </div>
      </MDBCol>
    </div>
  );
};

export default AccountSettings;
