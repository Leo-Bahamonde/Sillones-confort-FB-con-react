import React from 'react'
import IndexNavbar2 from "../../components/Navbars/IndexNavbarSecondary.js";
import DemoFooter from "../../components/Footers/DemoFooter.js";
import WhatsAppIcon from '../../components/WhatsAppIcon/WhatsAppIcon'


const Products = () => {
    React.useEffect(()=>{
        document.title="Nuestros productos"
    })
    return (
        <div>
        <IndexNavbar2/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            PRODUCTOS
        <DemoFooter/>
        <WhatsAppIcon/>
        </div>
    )
}

export default Products
