import React from 'react'
import classes from './Nav.module.css'
import { Link, Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Promo from "../Promo/Promo";
import About from "../About/About";
import MobileNav from "./mobile/MobileNav";


export default function Nav() {

    const tabs = ['Home', 'Shop', 'Promo', 'About']

    const handleClick = (id) => {
        const ele = document.getElementsByClassName(classes.navLinkActive)
        for (let Element of ele) {
            Element.className = classes.navLink
        }
        document.getElementById(id).className = classes.navLinkActive

    }
    return (
        <>
            <div className={classes.navContainer}>
                <div className={classes.logo}></div>
                <div className={classes.right}>
                    <nav>
                        <ul className={classes.navList}>
                            {tabs.map(tab=>(
                                <li className={classes.navItem}><Link to={"/"+tab} className={classes.navLink}
                                                                      id={tab}
                                                                      onClick={() => handleClick({tab})}
                                                                      >{tab}</Link></li>
                            ))}
                        </ul>
                    </nav>
                    <div className={classes.profile}></div>
                </div>
            </div>
            <MobileNav/>
            <Routes>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/shop"} element={<Shop/>}/>
                <Route path={"/promo"} element={<Promo/>}/>
                <Route path={"/about"} element={<About/>}/>
            </Routes>
        </>

    )
}
