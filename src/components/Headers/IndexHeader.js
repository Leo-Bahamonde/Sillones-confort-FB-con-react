import React from "react";
import { Container } from "reactstrap";
import './StylesHeader.css'
function IndexHeader() {
  return (
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/antoine-barres.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center col-sm-12">
          <Container>
            <div className="title-brand">
            <div className="animate__animated animate__slideInUp">
                {/* <h1 className="presentation-title">SILLONES CONFORT FB</h1> */}
                <h1 className="titleh1">SILLONES CONFORT FB</h1>          
            </div>
              <div className="fog-low">
                <img
                  alt="..."
                  src={require("../../assets/img/fog-low.png").default}
                />
              </div>
              <div className="fog-low right">
                <img
                  alt="..."
                  src={require("../../assets/img/fog-low.png").default}
                />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center animate__animated animate__backInUp">
            Y sabemos que para los que aman a Dios, todas las cosas cooperan para 
            bien, esto es, para los que son llamados conforme a su propósito          
            <b> Romanos 8:28</b></h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          Style={{
            backgroundImage:
              "url(" + require("../../assets/img/clouds.png").default + ")",
          }}
        />
      </div>  
  );
}

export default IndexHeader;
