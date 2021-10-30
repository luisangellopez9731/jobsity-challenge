import { Logo } from "./logo";
import { Nav, Container, Navbar as NavbarBootstrap } from "react-bootstrap";
import { useText } from "commons/custom-hooks";

export const Navbar = () => {
  const { links } = useText("header.navbar");
  const { program, gallery, reviews, partners, contact } = links;
  const navItems = [program, gallery, reviews, partners, contact];
  console.log(links);
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
