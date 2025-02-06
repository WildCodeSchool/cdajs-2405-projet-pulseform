import { useTranslation } from "react-i18next";
import "./NavBar.scss"
import {FiUser, FiZap } from "react-icons/fi";

function NavBar(){
     const { t } = useTranslation();

     return (
        <div className="nav-bar">
            <button className="nav-bar__button">{<FiZap/>}</button>
            <button className="nav-bar__button">{<FiUser/>}</button>
        </div>
     )
}

export default NavBar;