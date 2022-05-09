import { MDBCard, MDBCardBody } from "mdb-react-ui-kit"

//Banner component
const Banner = () => {
  return (
    <MDBCard className="shadow rounded-0">
        <MDBCardBody className="text-center">
            <h3 className="text-dark">Welcome to Laragigs!</h3>
            <h6>Laragigs is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nesciunt possimus aperiam non. Quae aut veniam odio deleniti amet molestias cumque fugiat illum maxime doloribus in enim cum illo, consectetur, nihil quaerat eaque!</h6>
        </MDBCardBody>
    </MDBCard>
  )
}

export default Banner