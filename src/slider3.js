import React from "react";
import Slider3img from "./images/desktop-image-hero-3.jpg"
import Arrow from "./images/icon-arrow.svg"

export default function slide() {
    return(
        <div className="main">
            <div className="image-content">
            <img src={Slider3img} alt=""/>
            </div>

            <div className="description">
                <h1>Manufactured with<br/> the best materials</h1> <br/>
                <p> Our mordern furniture store provide a high level of quality. Our <br/>
                company has invested in advanced technology to ensure that <br/>
                every product is made as perfect and as a consistent as <br/>
                possible. with three decades of experience in this industry, we <br/>
                understand what customer want for their home and office
                </p>

                <section>
                <label> SHOP NOW</label>
               
                    <img src={Arrow} alt=""/>
                
                </section>

            </div>


        
        </div>
    )
}

