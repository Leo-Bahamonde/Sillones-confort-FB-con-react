import React from "react";
import {
  Button,
  Modal,
  Container,
  Row,
  Col,
} from "reactstrap";

function DemoFooter() {

  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const [modal2, setModal2] = React.useState(false);
  const toggleModal2 = () => {
    setModal2(!modal2);
  };

  return (
    <footer className="footer footer-black footer-white m-4">
      <Container>
        <Row>
        
              <Col className="ml-auto mr-auto text-center" md="6">
               {/* Button trigger modal */}
               <Button
                 className="btn-round m-2"
                 color="danger"
                 outline
                 type="button"
                 onClick={toggleModal}
               >
                 Licencia
               </Button>
               {/* Modal */}
               <Modal isOpen={modal} toggle={toggleModal}>
                 <div className="modal-header">
                   <button
                     aria-label="Close"
                     className="close"
                     type="button"
                     onClick={toggleModal}
                   >
                     <span aria-hidden={true}>X</span>
                   </button>
                   <h5
                     className="modal-title text-center"
                     id="exampleModalLabel"
                   >
                     LICENCIA
                   </h5>
                 </div>
                 <div className="modal-body">
                   Nada por aqui
                 </div>  
               </Modal>
             </Col>

             <Col className="ml-auto mr-auto text-center" md="6">
             {/* Button trigger modal */}
             <Button
               className="btn-round m-2"
               color="danger"
               outline
               type="button"
               onClick={toggleModal2}
             >
               Quines somos?
             </Button>
             {/* Modal */}
             <Modal isOpen={modal2} toggle={toggleModal2}>
               <div className="modal-header">
                 <button
                   aria-label="Close"
                   className="close"
                   type="button"
                   onClick={toggleModal2}
                 >
                   <span aria-hidden={true}>X</span>
                 </button>
                 <h5
                   className="modal-title text-center"
                   id="exampleModalLabel"
                 >
                   QUIENES SOMOS?
                 </h5>
               </div>
               <div className="modal-body">
                 Somos Sillones conford FB, fabricantes de sillones sillas y respaldos, 
                 con mas de 10 años de experiencia brindando calidad y atencion.
               </div>  
             </Modal>
           </Col>
        
        <Col className="text-center" md="12">
            <div className="credits">
              <span className="copyright">
                © {new Date().getFullYear()}, Leonel Bahamonde
                
                </span>
            </div>     
        </Col>

        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;

