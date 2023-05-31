import React from 'react'
import classes from "../Shop.module.css";

export default function Banner() {
    return (
        <div className={classes.banner}>
            <div className={classes.tile_container}>
                    <div className={classes.food_tile}>
                        <div className={classes.tile_img}></div>
                        <div className={classes.tile_text}>Burger</div>
                    </div>
                    <div className={classes.food_tile}>
                        <div className={classes.tile_img}></div>
                        <div className={classes.tile_text}>Burger</div>
                    </div>
                    <div className={classes.food_tile}>
                        <div className={classes.tile_img}></div>
                        <div className={classes.tile_text}>Burger</div>
                    </div>
                    <div className={classes.food_tile}>
                        <div className={classes.tile_img}></div>
                        <div className={classes.tile_text}>Burger</div>
                    </div>

            </div>
        </div>
    )
}
