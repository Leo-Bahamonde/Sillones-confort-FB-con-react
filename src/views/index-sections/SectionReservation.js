import React from "react";
// react plugin used to create datetimepicker
/* import ReactDatetime from "react-datetime";

/* <ReactDatetime
                        inputProps={{
                          placeholder: "Selector de fecha y hora aquí",
                        }}
                      /> */


// reactstrap components
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components 

function SectionReservation() {
  return (
    <>
      <div className="section javascript-components">
        <Container>
          <div className="title">
            <h2>Reserva un dia y horario para visitarnos</h2>
          </div>
          <Row id="modals">
            <br />
            <Col md="6">
              <div className="title">
                <h3>Seleccione dia y horario</h3>
              </div>
                <Col sm="6">
                  <FormGroup>
                    <InputGroup className="date" id="datetimepicker">
                      
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <span className="glyphicon glyphicon-calendar">
                            <i aria-hidden={true} className="fa fa-calendar" />
                          </span>
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  </Col>
                  </Col>        
                  </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionReservation;
