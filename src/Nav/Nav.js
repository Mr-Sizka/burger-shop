import React from 'react'
import classes from './Nav.module.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Promo from "../Promo/Promo";
import About from "../About/About";
import {AppBar, Toolbar} from "@mui/material";
import {Button, IconButton, makeStyles, Typography} from "@material-ui/core";
import {ExpandMore} from "@mui/icons-material";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Nav() {

    const styles = useStyles();
    return (
        <>
            <BrowserRouter>
            <div className={classes.navContainer}>
                <div className={classes.logo}></div>
                <div className={classes.right}>
                    <nav>
                        <ul className={classes.navList}>
                            <li className={classes.navItem} ><Link to={"/"} className={classes.navLink}>HOME</Link></li>
                            <li className={classes.navItem} ><Link to={"/shop"} className={classes.navLink}>SHOP</Link></li>
                            <li className={classes.navItem} ><Link to={"/promo"} className={classes.navLink}>PROMO</Link></li>
                            <li className={classes.navItem} ><Link to={"/about"} className={classes.navLink}>ABOUT</Link></li>
                        </ul>
                    </nav>
                    <div className={classes.profile}></div>
                </div>
            </div>
                <div className={classes.appBar}>
                    <AppBar position="static" style={{'background-color':'#EAE2B7'}}>
                        <Toolbar>
                            <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
                                <ExpandMore />
                            </IconButton>
                            <Typography variant="h6" className={styles.title}>
                                Home
                            </Typography>
                            <div className={classes.logo}></div>
                        </Toolbar>
                    </AppBar>
                </div>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/shop"} element={<Shop/>}/>
                    <Route path={"/promo"} element={<Promo/>}/>
                    <Route path={"/about"} element={<About/>}/>
                </Routes>
            </BrowserRouter>
        </>

    )
}
