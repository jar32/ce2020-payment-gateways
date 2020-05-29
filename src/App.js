import React from 'react';
import logo from './logo.svg';
import './App.css';
import PaypalButton from "./components/PaypalButton/PaypalButton";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from "./page/Home";
import { AppBar } from '@material-ui/core';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CameraIcon from '@material-ui/icons/PhotoCamera';
import { makeStyles } from '@material-ui/core/styles';

function App() {

    const useStyles = makeStyles((theme) => ({
        icon: {
            marginRight: theme.spacing(2),
        },
        heroContent: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(8, 0, 6),
        },
        heroButtons: {
            marginTop: theme.spacing(4),
        },
        cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
        },
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        cardMedia: {
            paddingTop: '56.25%', // 16:9
        },
        cardContent: {
            flexGrow: 1,
        },
        cardActions: {
            justifyContent: "center",
        },
        footer: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(6),
        },

    }));
    const classes = useStyles();
    return (
        <Router>
            <div className="App">

                <AppBar position="relative">
                    <Toolbar>
                        <CameraIcon className={classes.icon} />
                        <Typography variant="h6" color="inherit" noWrap>
                            Album layout
                        </Typography>
                    </Toolbar>
                </AppBar>

                <header className="">

                </header>


                <Switch>
                    <Route path="/about">
                        <PaypalButton />
                    </Route>
                    <Route path="/users">
                        <PaypalButton />
                    </Route>
                    <Route path="/">
                        <Home classes={classes}/>
                    </Route>
                </Switch>


            </div>

            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>

            </footer>
            {/* End footer */}
        </Router>
    );
}

export default App;
