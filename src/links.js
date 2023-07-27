
import logo from "./images/logo.svg"
export default function Links () {




    return(
        <div className="nav-bar" >
              
            <img src={logo} alt="logo"/>
            <ul className="nav-menu">
                <li>
                    <a href="home">Home</a>
                </li> 

                <li>
                <a href="shop">shop</a>
                </li>

                <li>
                <a href="about">About</a>
                </li>

                <li>
                <a href="contact">contact</a>
                </li>
            </ul>

      


     
        </div>
    )
}