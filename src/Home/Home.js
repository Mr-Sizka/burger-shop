import React from 'react'
import classes from './home.module.css'
import CategoryContainer from "./category/categoryContainer/CategoryContainer";
import HotSellers from "./hotSellers/HotSellers";
import Carousel from "react-material-ui-carousel";
export default function Home() {
    return (
        <>
            <div className={classes.slider}>
                <Carousel className={classes.home_carousel} indicators={false}>
                    <div style={{'width':'100%','height':'600px','backgroundColor':'#FCBF49'}}></div>
                    <div style={{'width':"100%",'height':'600px','backgroundColor':'#562430'}}></div>
                    <div style={{'width':"100%",'height':'600px','backgroundColor':'#245138'}}></div>
                </Carousel>

            </div>
            <CategoryContainer/>
            <HotSellers/>
        </>
    )
}
