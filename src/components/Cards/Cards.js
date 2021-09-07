import React from 'react'
import Image1 from "../../assets/img/sillonesFB/Screenshot_20210522-172806.png";
import Image2 from "../../assets/img/sillonesFB/Screenshot_20210527-192229.png";
import Image3 from "../../assets/img/sillonesFB/20200917-135124.png";
import SelectionCard from "../../views/index-sections/SelectionCard";

const Cards = () => {

    const Card =[
        {id:1, title:"Sillon Clasico", image:Image1, description:"Un sillon clasico de 1.80m con camastro y patas a escuadra", price:"$28.000"},
        {id:2, title:"Sillon Sofi", image:Image2, description:"Un sillon Sofi de 1.80m con camastro y patas de madera comunes", price:"$26.000"},
        {id:3, title:"Sillon Chester", image:Image3, description:"Un sillon Chester de 1.80m con camastro y patas de aluminio", price:"$68.000"}
    ]
    
    return (
        <div>
             <div className="ml-auto mr-auto text-center mb-3">
                <h4>PRODUCTOS DESTACADOS</h4>
             </div>
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row">
                {
                    Card.map(card=>(
                        <div className="col-md-4" key={card.id}>
                            <SelectionCard title={card.title} image={card.image} description={card.description} price={card.price} value={card.value}/>
                        </div>
                    ))
                }
                </div>
            </div>
        
        </div>
    )
}
export default Cards

