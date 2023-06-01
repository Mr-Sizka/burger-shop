import React from 'react'
import classes from './Nav.module.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Promo from "../Promo/Promo";
import About from "../About/About";
import MobileNav from "./mobile/MobileNav";





export default function Nav() {

    const handleClick = (id) =>{
        const ele = document.getElementsByClassName(classes.navLinkActive)
        for (let Element of ele) {
            Element.className=classes.navLink
        }
        document.getElementById(id).className=classes.navLinkActive

    }
    return (
        <>
            <div className={classes.navContainer}>
                <div className={classes.logo}></div>
                <div className={classes.right}>
                    <nav>
                        <ul className={classes.navList}>
                            <li className={classes.navItem} ><Link to={"/home"} className={classes.navLink} onClick={()=>handleClick('home')} id={'home'}>HOME</Link></li>
                            <li className={classes.navItem} ><Link to={"/shop"} className={classes.navLink} onClick={()=>handleClick('shop')} id={'shop'}>SHOP</Link></li>
                            <li className={classes.navItem} ><Link to={"/promo"} className={classes.navLink} onClick={()=>handleClick('promo')} id={'promo'}>PROMO</Link></li>
                            <li className={classes.navItem} ><Link to={"/about"} className={classes.navLink} onClick={()=>handleClick('about')} id={'about'}>ABOUT</Link></li>
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
