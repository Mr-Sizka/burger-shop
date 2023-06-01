import React from 'react'
import {Button, Card, CardHeader, CardMedia, Container, makeStyles, Typography} from "@material-ui/core";
import classes from '../promo.module.css'
import {CardActions, CardContent} from "@mui/material";
import { Shop2} from "@mui/icons-material";

const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor:'#FCBF49',
        "&:hover":{
            backgroundColor:'#f77f00'
        }
    }
}))
export default function PromoItem() {
    const styles = useStyles();
    return (
        <Container>
            <Card className={classes.promo_card}>
                <CardMedia
                component={'img'}
                width={'100%'}
                image={'https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'}>
                </CardMedia>
                <CardContent>
                    <Typography variant={'h4'} component={"div"}>PromoName</Typography>
                    <Typography color={"textSecondary"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, quod!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color={"primary"} variant={"contained"} className={styles.root} >
                        <Shop2 />  Buy Now
                    </Button>
                </CardActions>
            </Card>
        </Container>
    )
}
