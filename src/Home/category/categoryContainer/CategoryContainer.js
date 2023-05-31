import React from 'react'
import classes from "../../home.module.css";
import {Grid} from "@material-ui/core";
import CategoryTile from "./tile/CategoryTile";

export default function CategoryContainer() {
    return (
        <div className={classes.category_container_outer}>
            <div className={classes.category_container}>
                <h2 className={classes.category_container_title}>For You</h2>
                <Grid container alignItems={"center"}>
                    <Grid item xs={9} sm={10} md={6} lg={4} xl={3}><CategoryTile/></Grid>
                    <Grid item xs={9} sm={10} md={6} lg={4} xl={3}><CategoryTile/></Grid>
                    <Grid item xs={9} sm={10} md={6} lg={4} xl={3}><CategoryTile/></Grid>
                    <Grid item xs={9} sm={10} md={6} lg={4} xl={3}><CategoryTile/></Grid>
                    <Grid item xs={9} sm={10} md={6} lg={4} xl={3}><CategoryTile/></Grid>
                    <Grid item xs={9} sm={10} md={6} lg={4} xl={3}><CategoryTile/></Grid>
                </Grid>
            </div>
        </div>
    )
}
