import React from 'react'
import classes from './Shop.module.css';
import { TextField} from "@material-ui/core";
import Banner from "./banner/Banner";
import Right from "./content/Right";
import Left from "./content/Left";

export default function Shop() {
    return (
        <div>
            <Banner/>
            <div className={classes.search_bar}>
                <TextField
                    type={"search"}
                    id={"search"}
                    label={"Search"}
                ></TextField>
                <div className={classes.cart_icon}></div>
            </div>

            <div className={classes.content}>

                <Left/>

                <Right/>

            </div>
        </div>
    )
}
