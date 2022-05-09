import { useState } from "react";

//MDB Components
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBNavbarNav,
} from "mdb-react-ui-kit";
const Header = () => {
  const [showNavNoToggler, setShowNavNoToggler] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoToggler(!showNavNoToggler)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoToggler} className="my-5">
            <MDBNavbarBrand href="#" className="me-auto">
              <h4>Laragigs</h4>
            </MDBNavbarBrand>
            <MDBNavbarNav className="mb-2 mb-lg-0 w-auto">
              <MDBNavbarItem>
                <MDBNavbarLink>Manage Your Gigs</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Account Settings</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Header;
