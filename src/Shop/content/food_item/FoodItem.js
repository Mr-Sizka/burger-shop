import React from 'react'
import classes from "../../Shop.module.css";
import {Box, Button, Card, CardMedia, Typography} from "@material-ui/core";
import {CardActions, CardContent} from "@mui/material";

export default function FoodItem() {
    return (

        /*<div className={classes.food_item}>
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
        </div>*/

        <Box style={{'width': 'auto', 'max-width': '300px','margin':'20px'}} >
            <Card>
                <CardMedia
                    component={'img'}
                    height={'200px'}
                    image='https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'/>
                <CardContent>
                    <Typography variant={'h5'} component={"div"}>Chicken Burger</Typography>
                    <Typography variant={'body2'} color={"textSecondary"}>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Autem, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
                        ullam.</Typography>
                </CardContent>
                <CardActions>
                    <div className={classes.price_container}>
                        <h4>$ 10.00</h4>
                        <Button>Add to cart</Button>
                    </div>
                </CardActions>
            </Card>
        </Box>
    )
}
