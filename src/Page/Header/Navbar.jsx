import Nav from "react-bootstrap/Nav";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <Nav className="navbar" activeKey="/home">
        <div className="logo">
          <h1>moja firma</h1>
        </div>
        <div className="navlinks">
          <Nav.Item>
            <Nav.Link href="#about">o nas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#offer">oferta</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="contact">kontakt</Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
