import React from 'react'
import {Container, Grid} from "@material-ui/core";
import classes from './promo.module.css'
import FoodItem from "../Shop/content/food_item/FoodItem";
import PromoItem from "./promoItem/PromoItem";

export default function Promo() {
    return (
        <Container className={classes.container}>
            <div className={classes.promo_outer}>
                <h1>Promos</h1>
                <div className={classes.promo_container}>
                   <Grid container alignItems={"center"}>
                       <Grid item xs={12} sm={12} lg={6} xl={6} ><PromoItem/></Grid>
                       <Grid item xs={12} sm={12} lg={6} xl={6} ><PromoItem/></Grid>
                       <Grid item xs={12} sm={12} lg={6} xl={6} ><PromoItem/></Grid>
                       <Grid item xs={12} sm={12} lg={6} xl={6} ><PromoItem/></Grid>
                   </Grid>
                </div>
            </div>
        </Container>
    )
}
