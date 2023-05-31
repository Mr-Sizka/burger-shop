import React from 'react'
import classes from "../../Shop/Shop.module.css";
import {List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles, TextField} from "@material-ui/core";
import { LunchDining} from "@mui/icons-material";
import {FormControl, InputLabel, MenuItem, } from "@material-ui/core";
import Select from '@material-ui/core/Select';


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
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        display:"flex",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    text:{
        margin:10
    }



}))
export default function Left() {

    const styles = useStyles();
    return (
        <>
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
                        label={"Max"}
                        InputProps={{ inputProps: { min: 1 } }}
                    />
                </ListItem>
            </List>


        </div>
            <div className={classes.responsive_left}>
                <FormControl className={styles.formControl}>
                    <InputLabel htmlFor="category-select">Category</InputLabel>
                    <Select
                        native
                        inputProps={{
                            name: 'category',
                            id: 'category-select',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Burger</option>
                        <option value={20}>Sandwich</option>
                        <option value={30}>Pizza</option>
                    </Select>

                </FormControl>
                <TextField className={styles.text}
                    type={"number"}
                    label={"Min"}
                    InputProps={{ inputProps: { min: 1 } }}/>
                <TextField className={styles.text}
                    type={"number"}
                    label={"Max"}
                    InputProps={{ inputProps: { min: 1 } }}/>
            </div>
        </>
    )
}
