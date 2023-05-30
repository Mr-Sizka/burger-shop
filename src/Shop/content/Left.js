import React from 'react'
import classes from "../../Shop/Shop.module.css";
import {List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles, TextField} from "@material-ui/core";
import { LunchDining} from "@mui/icons-material";
import {hover} from "@testing-library/user-event/dist/hover";



const useStyles = makeStyles((theme) => ({
    root:{
        width: '100%',
        backgroundColor: theme.palette.background.paper,

    },
    hover:{
        borderRadius: 5,
        "&:hover":{
            backgroundColor: '#FCBF49'
        },
    }


}))
export default function Left() {

    const styles = useStyles();
    return (
        <div className={classes.left}>
            <List className={styles.root}>
                <ListSubheader align={'left'}><h2>Categories</h2></ListSubheader>

                <ListItem button className={styles.hover}>
                    <ListItemIcon><LunchDining/></ListItemIcon>
                    <ListItemText  >Burger</ListItemText>
                </ListItem>

                <ListItem button className={styles.hover}>
                    <ListItemIcon><LunchDining/></ListItemIcon>
                    <ListItemText >Burger</ListItemText>
                </ListItem>
                <ListItem button className={styles.hover}>
                    <ListItemIcon><LunchDining/></ListItemIcon>
                    <ListItemText >Burger</ListItemText>
                </ListItem>
                <ListItem button className={styles.hover}>
                    <ListItemIcon><LunchDining/></ListItemIcon>
                    <ListItemText >Burger</ListItemText>
                </ListItem>
            </List>

            <List className={styles.root}>
                <ListSubheader align={'left'}><h2>Price Range</h2></ListSubheader>
                <ListItem>
                    <TextField
                        type={"number"}
                        label={"Min"}
                        InputProps={{ inputProps: { min: 1 } }}
                    />
                </ListItem>
                <ListItem>
                    <TextField
                        type={"number"}
                        label={"Min"}
                        InputProps={{ inputProps: { min: 1 } }}
                    />
                </ListItem>
            </List>
        </div>
    )
}
