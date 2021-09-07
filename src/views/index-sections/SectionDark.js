import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionDark() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Complementa tu estilo</h2>
              <p className="description">
                Podes elgir el color y la tela que quieras, nosotros te lo fabricamos!!
              </p>
            </Col>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Sabemos de sillones</h2>
              <p className="description">
              En Sillones Confort FB diseñamos para inspirar el cambio y la renovación en 
              cada espacio de tu vida. Nuestra propuesta parte de colaborar y
              trabajar en equipo con los mejores artesanos, materiales y 
              creadores para crear productos simples, prácticos y duraderos. 
              Así es como logramos brindar estilo, confort y variedad directo 
              a tu puerta, con los mejores precios de fabrica.
              </p>
            </Col>
          </Row>

          
        </Container>
      </div>
    </>
  );
}

export default SectionDark;

            