import React from 'react'
import './WhatsAppIcon.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'

const WhatsAppIcon = () => {
    return (
        <div>
             <a href="https://api.whatsapp.com/send?phone=5491131896414&text=Hola SillonesFB sigue disponibles?" className="float">
             <FontAwesomeIcon icon={faWhatsapp} size="lg"/> 
            </a> 
        </div>
    )
}

export default WhatsAppIcon
