import React from "react";
import Slider2img from "./images/desktop-image-hero-2.jpg"
import Arrow from "./images/icon-arrow.svg"

export default function slide() {
    return(
        <div className="main">
            <div className="image-content">
            <img src={Slider2img} alt=""/>
            </div>

            <div className="description">
                <h1>We are available all<br/> across the globle</h1> <br/>
                <p> With stores all over the world, it's easy for you to find fortune <br/>
                for your home or place of business. Locally, we're in most <br/>
                major citie throughout the country. Find the branch nearest <br/>
                you using our store locator. Any questions? Don't hesitate to <br/> contact us today. 
                </p>

                <section>
                <label> SHOP NOW</label>
                
                    <img src={Arrow} alt=""/>
                
                </section>

            </div>


        
        </div>
    )
}

