import React from 'react'
import classes from './Nav.module.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Promo from "../Promo/Promo";
import About from "../About/About";
import MobileNav from "./mobile/MobileNav";





export default function Nav() {

    return (
        <>
            <div className={classes.navContainer}>
                <div className={classes.logo}></div>
                <div className={classes.right}>
                    <nav>
                        <ul className={classes.navList}>
                            <li className={classes.navItem} ><Link to={"/home"} className={classes.navLink}>HOME</Link></li>
                            <li className={classes.navItem} ><Link to={"/shop"} className={classes.navLink}>SHOP</Link></li>
                            <li className={classes.navItem} ><Link to={"/promo"} className={classes.navLink}>PROMO</Link></li>
                            <li className={classes.navItem} ><Link to={"/about"} className={classes.navLink}>ABOUT</Link></li>
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
