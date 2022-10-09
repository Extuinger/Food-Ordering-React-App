import { Fragment } from "react";
import MealsImage from "../../assets/img/meals.jpg"
import Classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartBtton";


const Header = props => {
    return <Fragment>
        <header className={Classes.header}>
            <h1>Meals</h1>
            <HeaderCartButton/>
        </header>
        <div className={Classes['main-image']}>
            <img src = {MealsImage} alt=""/>
        </div>
    </Fragment>

};

export default Header;