import React from "react";
import BottomImg1 from "./images/image-about-dark.jpg"
import BottomImg2 from "./images/image-about-light.jpg"

const  Bottom = () =>{
    return(
        <div className="main-content">
            <div className="main-image">
                <img src={BottomImg1} alt=""/>
            </div>

            <div className="main-about">
                <h1>ABOUT OUR FURNITURE</h1>
                <p>
                    Our mulfunctional collection blends design and function to suit your <br/>
                    individual taste. Make each room unique, or pick acohesive theme that best <br/>
                    express your interests and what inspires you. Find the furnitune pieces you <br/>
                    need, from traditional to contemporary styles or anything in between. <br/>
                    Product specialists are available to help you create your dream space.

                </p>
            </div>

            <div className="main-image">
                <img src={BottomImg2} alt=""/>
            </div>

        </div>
    )
}

export default Bottom;