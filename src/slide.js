import React from "react";
import Sliderimg from "./images/desktop-image-hero-1.jpg"
import Arrow from "./images/icon-arrow.svg"

export default function slide() {
    return(
        <div className="main">
            <div className="image-content">
            <img src={Sliderimg} alt=""/>
            </div>

            <div className="description">
                <h1>Discover innovative<br/> Ways to decorate</h1> <br/>
                <p> We provide unmatched quality,comfort,and style for property <br/>
                owners across the country.Our experts combine from and <br/>
                function in bringing your vision to life. Create a room in your <br/>
                own style with our collection and make  your property a <br/>
                reflection of you and whatyou love.
                </p>

                <section>
                <label> SHOP NOW</label>
                
                    <img src={Arrow} alt=""/>
                
                </section>

            </div>


        
        </div>
    )
}

