import React from 'react';
import { useForm } from "react-hook-form";


import IndexNavbar2 from "../../components/Navbars/IndexNavbarSecondary.js";
import DemoFooter from "../../components/Footers/DemoFooter.js";
import WhatsAppIcon from '../../components/WhatsAppIcon/WhatsAppIcon'
import '../../assets/css/paper-kit.css'


function Contacts() {

  const {register,errors, handleSubmit} = useForm();
 

  const onSubmit =(a)=>{
      console.log(a);
  }
  return (
    <div>
    <div className="container mt-3 p-4">
    <IndexNavbar2/>
      <div>
          <h2>Formulario de contacto</h2>
       </div>


       <div className="mt-4">
       <form onSubmit={handleSubmit(onSubmit)}>

      <div className="row">
       
         <div className=" col-sm-12 col-md-12	col-lg-6	col-xl-6	col-xxl-6">
           <input 
             type="text"
             name="name" 
             className="form-control"
             placeholder="Nombre"
             ref={
              register({ 
                required: {value:true, message:'*Campo obligatorio'},
                maxLength: {value: 20,message: "*Maximo 20 caracteres validos"},
                minLength:{value:2, message:'*Minimo 2 caracteras validos'},
                pattern: {value:/^[A-Za-z]+$/i ,message:'*Caracter no valido'}
               })
             }
              />
              <div className="col-12 mb-2">
              <span className="text-danger text-small d-block mb-2">
                  {errors.name && errors.name.message}
              </span>
          </div>
         </div>

         <div className="col-sm-12 col-md-12	col-lg-6	col-xl-6	col-xxl-6">
           <input
               type="text"
               name="surname" 
               className="form-control"
               placeholder="Apellido"
               ref={
                register({ 
                  required: {value:true, message:'*Campo obligatorio'},
                  maxLength: {value: 40,message: "*Maximo 40 caracteres validos"},
                  minLength:{value:2, message:'*Minimo 2 caracteras validos'},
                  pattern: {value:/^[A-Za-z]+$/i ,message:'*Caracter no valido'}
                 })
               }
             />
             <span className="text-danger text-small d-block mb-2"> 
                 {errors.surname && errors.surname.message}
             </span>
             
         </div>
         

         <div className="col-sm-12 col-md-12	col-lg-12	col-xl-12	col-xxl-12">
           <input 
              type="email" 
              name="email" 
              className="form-control" 
              placeholder="Ingrese un E-mail"
              ref={
                register({ 
                  required: {value:true, message:'*Campo obligatorio'},
                  minLength:{value:2, message:'*Minimo 2 caracteras validos'},     
                 })
               }
             />
             <span className="text-danger text-small d-block mb-2">
                  {errors.email && errors.email.message}
             </span>
         </div>

         <div className="col-sm-12 col-md-12	col-lg-12	col-xl-12	col-xxl-12">
           <input 
             type="tel"
             name="tel"
             className="form-control"
             placeholder="Telefono"
             ref={
              register({ 
                 pattern: {value:/^([0-9])*$/ ,message:'*Caracter no valido'}
               })
             } 
           />
           <span className="text-danger text-small d-block mb-2">
                {errors.tel && errors.tel.message}
           </span>  
         </div>

         <div className="col-sm-12 col-md-12	col-lg-12	col-xl-12	col-xxl-12 ">
             <textarea 
                 className="form-control"
                 id="exampleFormControlTextarea1" 
                 placeholder="Escribe aqui tu consulta.."
                 rows="6"
                 name="textarea"
                 ref={
                  register({ 
                    required: {value:true, message:'*Campo obligatorio'},
                    maxLength: {value: 400,message: "*Maximo 400 caracteres"},
                    minLength:{value:10, message:'*Cuentanos un poco mas'},
                   
                   })
                 }
               />
               <span className="text-danger text-small d-block mb-2">
                   {errors.textarea && errors.textarea.message}
               </span>
         </div>

         <div >
             <button type="submit" className="btn btn-primary">Enviar</button>    
         </div>
       </div>
     </form>
    </div>
   </div>
        
              <div>
                    <WhatsAppIcon/>
                    <DemoFooter/>  
              </div>
      
      </div>
  );
}

export default Contacts;