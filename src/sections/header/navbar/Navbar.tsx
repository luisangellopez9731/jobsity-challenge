import { Logo } from "./logo";
import {
  Nav,
  Container,
  NavDropdown,
  Navbar as NavbarBootstrap,
} from "react-bootstrap";

const navItems = ["program", "gallery", "reviews", "partners", "contact"];

export const Navbar = () => {
  return (
    <>
      <NavbarBootstrap expand="lg">
        <Container>
          <NavbarBootstrap.Brand href="#home">
            <Logo />
          </NavbarBootstrap.Brand>
          <NavbarBootstrap.Toggle />
          <NavbarBootstrap.Collapse className="justify-content-end">
            {navItems.map((item, index) => (
              <Nav.Link href={`#${item}`} style={{ color: "white" }}>
                {item}
              </Nav.Link>
            ))}
          </NavbarBootstrap.Collapse>
        </Container>
      </NavbarBootstrap>
    </>
  );
};
