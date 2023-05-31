import React from 'react'
import classes from "../Shop.module.css";
import FoodItem from "./food_item/FoodItem";
import {Grid} from "@material-ui/core";

export default function Right() {
    return (
        <div className={classes.right}>
            <Grid container>
                <Grid item xs={12} sm={6} lg={4} xl={3}><FoodItem/></Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}><FoodItem/></Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}><FoodItem/></Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}><FoodItem/></Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}><FoodItem/></Grid>
            </Grid>
        </div>
    )
}
