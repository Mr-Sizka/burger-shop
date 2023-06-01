import React from 'react'
import classes from "../Nav.module.css";
import {AppBar, Divider, Drawer, ListItemButton, styled, Toolbar, useTheme} from "@mui/material";
import {IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography} from "@material-ui/core";
import {ArrowLeft, ArrowRight, ExpandMore, Inbox, Mail, MenuBook, MenuOpen} from "@mui/icons-material";
import {Link} from "react-router-dom";


const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color:'black'
    },
}));
export default function MobileNav() {

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };



    const theme = useTheme();
    const styles = useStyles();
    return (
        <>
            <div className={classes.appBar}>
                <AppBar position="static" style={{'background-color':'#EAE2B7'}}>
                    <Toolbar>
                        <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="open drawer"
                                    onClick={handleDrawerOpen}>
                            <MenuOpen className={styles.title}/>
                        </IconButton>
                        <Typography variant="h6" className={styles.title}>
                            {window.location.pathname.slice(1)}
                        </Typography>
                        <div className={classes.logo}></div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ArrowLeft /> : <ArrowRight />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {['Home', 'Shop', 'Promo', 'About'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton onClick={handleDrawerClose}><Link to={'/'+text} className={classes.menu_text} >
                                    <ListItemText primary={text} className={classes.menu_text}/></Link>
                                </ListItemButton>
                                <Divider />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </div>
        </>
    )
}
