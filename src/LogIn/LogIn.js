import React from 'react'
import {Box, Button, TextField, Typography} from "@material-ui/core";
import classes from "./LogIn.module.css";
export default function LogIn() {

    const handleClick = () =>{
        window.location.pathname = '/home'
    }
    return (
        <div className={classes.login_outer}>
            <Box className={classes.login_inner}>
                <Typography variant={'h2'}  className={classes.title}>Log In</Typography>

                <TextField
                    required
                    id={"email"}
                    type={"email"}
                    label={"Email"}
                    style={{'width':'80%','margin-top':"30px"}}
                ></TextField>

                <TextField
                    required
                    margin={"normal"}
                    label={"Password"}
                    id={"password"}
                    type={"password"}
                    style={{'width':'80%','margin-top':"30px"}}
                ></TextField>
                <Button

                    variant={"contained"}
                    color={"primary"}
                    onClick={handleClick}
                >LogIn</Button>
                <h3>Don't Have An Account ?</h3>
                <Button>Register Here</Button>
            </Box>
        </div>
    )
}
