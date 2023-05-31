import React from 'react'
import classes from '../home.module.css'
import Carousel from "react-material-ui-carousel";
import {Paper} from "@mui/material";
import FoodItem from "../../Shop/content/food_item/FoodItem";



export default function HotSellers() {

    return (
        <div className={classes.hot_outer}>
            <div className={classes.hot_inner}>
                <h1>Hot Sellers</h1>
                <Carousel className={classes.carousel}  animation={"slide"} >

                    <Paper className={classes.slide}>
                        <FoodItem/>
                        <FoodItem/>
                        <FoodItem/>
                    </Paper>
                     <Paper className={classes.slide}>
                        <FoodItem/>
                        <FoodItem/>
                        <FoodItem/>
                    </Paper>
                     <Paper className={classes.slide}>
                        <FoodItem/>
                        <FoodItem/>
                        <FoodItem/>
                    </Paper>
                </Carousel>
            </div>
        </div>
    )
}
