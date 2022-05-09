//App components
import Header from "./common_components/Header";
import Login from "./pages/Auth/Login";
//MDB components
import { MDBContainer } from "mdb-react-ui-kit";
//app styles
import "./App.css";
import AddNewGig from "./pages/AddNewGig";
import UpdateGig from "./pages/UpdateGig";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />

      {/* app container */}
      <MDBContainer>
        {/* <Login /> */}
        {/* <AddNewGig/> */}
        {/* <UpdateGig/> */}
        <Home/>
      </MDBContainer>
    </div>
  );
}

export default App;
