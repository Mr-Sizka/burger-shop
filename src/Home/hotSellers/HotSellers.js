import React, {useState} from 'react'
import classes from '../home.module.css'
import Carousel from "react-material-ui-carousel";
import {Paper} from "@mui/material";
import FoodItem from "../../Shop/content/food_item/FoodItem";

export default function HotSellers() {
    const [width , setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(window.innerWidth)
    }
    window.addEventListener('resize',updateWidth)

    return (
        <>
        <div className={classes.hot_outer}>
            <div className={classes.hot_inner}>
                <h1>Hot Sellers</h1>
                {(width>=800 && width < 1300 ) && <Carousel className={classes.carousel}  animation={"slide"} >

                    <Paper className={classes.slide}>
                        <FoodItem/>
                        <FoodItem/>
                    </Paper>
                    <Paper className={classes.slide}>
                        <FoodItem/>
                        <FoodItem/>
                    </Paper>
                    <Paper className={classes.slide}>
                        <FoodItem/>
                        <FoodItem/>
                    </Paper>
                </Carousel>}

                { (width<800 && width > 0 )&& <Carousel className={classes.carousel}  animation={"slide"} >

                    <Paper className={classes.slide}>
                        <FoodItem/>

                    </Paper>
                    <Paper className={classes.slide}>
                        <FoodItem/>
                    </Paper>
                    <Paper className={classes.slide}>
                        <FoodItem/>
                    </Paper>
                </Carousel>}

                {width>=1300 && <Carousel className={classes.carousel}  animation={"slide"} >

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
                </Carousel>}

            </div>
        </div>
        </>
    )
}
