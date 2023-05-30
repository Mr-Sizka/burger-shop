import React from 'react'
import classes from "../Shop.module.css";
import FoodItem from "./food_item/FoodItem";

export default function Right() {
    return (
        <div className={classes.right}>
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
        </div>
    )
}
