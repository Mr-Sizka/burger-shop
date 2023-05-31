import React from 'react'
import classes from "../../../home.module.css";
import {CardContent} from "@mui/material";
import {Card, Typography} from "@material-ui/core";
import {Fastfood} from "@mui/icons-material";

export default function CategoryTile() {
    return (
        <Card  className={classes.category_tile}>
            <CardContent>
                <Typography component={"div"} variant={"h5"}>Burger</Typography>
                <Fastfood/>
            </CardContent>
        </Card>
    )
}
