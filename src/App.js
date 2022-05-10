//react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//App components
import Header from "./common_components/Header";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import AddNewGig from "./pages/AddNewGig";
import UpdateGig from "./pages/UpdateGig";
import Home from "./pages/Home";
import GigDetails from "./pages/GigDetails";
import ManageGigs from "./pages/ManageGigs";
import Footer from "./common_components/Footer";
import AccountSettings from "./pages/Auth/AccountSettings";
//MDB components
import { MDBContainer } from "mdb-react-ui-kit";
//app styles
import "./App.css";
import Alert from "./common_components/Alert";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* header */}
        <Header />
        {/* app container */}
        <MDBContainer>
          {/* alert */}
          <Alert />
          {/* routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddNewGig />} />
            <Route path="/update/:id" element={<UpdateGig />} />
            <Route path="/details/:id" element={<GigDetails />} />
            <Route path="/manage-gigs" element={<ManageGigs />} />
            <Route path="/account-settings" element={<AccountSettings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          {/* <Login /> */}
        </MDBContainer>
        {/* footer */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
