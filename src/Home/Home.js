import React from 'react'
import classes from './home.module.css'
import { Grid, } from "@material-ui/core";
import CategoryTile from "./category/categoryContainer/tile/CategoryTile";
import CategoryContainer from "./category/categoryContainer/CategoryContainer";
import HotSellers from "./hotSellers/HotSellers";
export default function Home() {
    return (
        <div>
            <div className={classes.slider}></div>
            <CategoryContainer/>
            <HotSellers/>
        </div>
    )
}
