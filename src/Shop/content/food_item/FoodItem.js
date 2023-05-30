import React from 'react'
import classes from "../../Shop.module.css";
import {Button} from "@material-ui/core";

export default function FoodItem() {
    return (

        <div className={classes.food_item}>
            <div className={classes.food_item_img}></div>
            <div className={classes.food_details}>
                <div className={classes.title_container}>
                    <h2>Chicken Burger</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolores eaque
                        eligendi ipsam iure mollitia nesciunt officia, quaerat quisquam saepe?</p>
                </div>


                <div className={classes.price_container}>
                    <h4>$ 10.00</h4>
                    <Button>Add to cart</Button>
                </div>
            </div>
        </div>
    )
}
