import React from 'react'
import classes from './home.module.css'
import CategoryContainer from "./category/categoryContainer/CategoryContainer";
import HotSellers from "./hotSellers/HotSellers";
import Carousel from "react-material-ui-carousel";
import {Button} from "@material-ui/core";

const img = ["https://plus.unsplash.com/premium_photo-1684923610927-326aa9ca327a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
    "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"]

export default function Home() {
    return (
        <>
            <div className={classes.slider}>
                <Carousel className={classes.home_carousel} indicators={false} animation={"slide"}
                          stopAutoPlayOnHover={false} interval={20000}>
                    {img.map(item => (
                        <div className={classes.carousel_slide} style={{'backgroundImage': "url(" + item + ")"}}>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos laboriosam laborum
                                    maxime odio sapiente voluptate. Accusamus incidunt odio quo? Consequuntur.</p>
                                <Button> Check Out </Button>
                            </div>

                        </div>
                    ))}
                </Carousel>

            </div>
            <CategoryContainer/>
            <HotSellers/>
        </>
    )
}
