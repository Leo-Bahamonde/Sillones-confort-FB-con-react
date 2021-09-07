import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent2");/* NO SACAR "navbar-transparent2" */
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("navbar-transparent2");/* NO SACAR "navbar-transparent2" */
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("");  /* sacar navbar-transparent hace al menu visible siempre  */
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/"
            title="Inicio"
          >
            Inicio
          </NavbarBrand>
          
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
            
            
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>

          <NavItem>
            <NavLink
                data-placement="bottom"
                href="/productos"
                title="productos"
              >PRODUCTOS
            </NavLink>
          </NavItem>

            <NavItem>
            <NavLink
                data-placement="bottom"
                href="/contactos"
                title="contactos"
              >CONTACTOS     
              </NavLink>
            </NavItem>

            <NavItem>
            <NavLink
                data-placement="bottom"
                href="/como-llegar"
                title="como-llegar"
              >COMO LLEGAR?
              </NavLink>
            </NavItem>
<hr></hr>
            <NavItem>
            <NavLink
            data-placement="bottom"
            href="//web.whatsapp.com/send?phone=[54][1138170024]"
            target="_blank"
            title="whatsapp"
              >
            <i className="fa fa-whatsapp" />
            <p className="d-lg-none">Whatsapp</p>
            </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/berakah.sillones"
                target="_blank"
                title="Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/sillones.fb/"
                target="_blank"
                title="Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem> 
            
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;

