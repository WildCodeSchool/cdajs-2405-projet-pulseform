import { useNavigate } from "react-router-dom";
import "./NavBar.scss"
import {Icon} from "@iconify/react";

function NavBar(){
    const navigate = useNavigate()

     return (
        <div className="nav-bar">
            <Icon
                icon="ph:lightning"
                className="nav-bar__button"
                width="40"
                height="40"
                onClick={()=>{navigate("/sign-up")}}
            />
            <Icon
                icon="ph:user"
                className="nav-bar__button"
                width="40"
                height="40"
                onClick={()=>{navigate("/sign-up")}}
            />
        </div>
     )
}

export default NavBar;