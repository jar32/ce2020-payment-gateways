import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from "./page/Home";
import { AppBar } from '@material-ui/core';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import PaymentIcon from '@material-ui/icons/Payment';
import Checkout from './page/Checkout';
import Cancel from "./page/Cancel";
import ProductContext from "./context/ProductContext";
import ThankYouPage from "./page/ThankYouPage";

function App() {

    const useStyles = makeStyles((theme) => ({
        nav: {
            background: '#222',
        },
        body: {
            backgroundSize: 'cover',
            background: 'url(https://images.unsplash.com/photo-1556006147-e0b8ba7bfdfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80)',
        },
        thankyou: {
            backgroundSize: 'cover',
            background: 'url(https://images.unsplash.com/photo-1514048346384-cb81e908689b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80)',
        },
        icon: {
            marginRight: theme.spacing(2),
        },
        navLink: {
            color: 'white',
            textDecoration: 'none',
            marginLeft: '1em',
        },
        heroContent: {
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
            padding: '16px',
        },
        cardPricing: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
            marginTop: theme.spacing(2),
            //marginBottom: theme.spacing(2),
        },
        footer: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(6),
        },

    }));

    const cards = [
        {'id' : 1, 'name': 'Turismo', 'price':25,
            'Description': 'Disfrute del circuito',
            'img': 'https://i.pinimg.com/originals/a5/fa/40/a5fa407cf5e948e124a58855a4c5ad0f.jpg'},
        {'id' : 2, 'name': 'Gran Turismo', 'price':50,
            'Description': 'Tómeselo en serio',
            'img': 'https://images.unsplash.com/photo-1566274360936-69fae8dc1d95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'},
        {'id' : 3, 'name': 'Superdeportivos',
            'Description': 'Lo importante es ganar', 'price':288,
            'img': 'https://images.unsplash.com/photo-1529954223331-4be3b228703a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}
    ];

    const classes = useStyles();
    return (
        <ProductContext.Provider value={cards}>
            <Router>

                <div className='App'>
                    {/* Navbar */}
                    <AppBar className={classes.nav} position="relative">
                        <Toolbar>
                            <PaymentIcon className={classes.icon} />
                            <Typography variant="h6" color="inherit" noWrap>
                                Paypal Gateway

                            </Typography>
                            <Typography variant="h6" color="inherit" noWrap>
                                <Link className={classes.navLink} to='/' >Home</Link>
                            </Typography>

                        </Toolbar>
                    </AppBar>
                    {/* End Navbar */}

                    {/* Content */}
                    <Switch>
                        <Route path="/checkout/:id">
                            <Checkout classes={classes}/>
                        </Route>
                        <Route path="/cancel">
                            <Cancel classes={classes}/>
                        </Route>
                        <Route path="/thankyou">
                            <ThankYouPage classes={classes}/>
                        </Route>
                        <Route path="/">
                            <Home classes={classes}/>
                        </Route>
                    </Switch>
                    {/* End content */}

                    {/* Footer */}
                    <footer className={classes.footer}>
                        <Typography variant="h6" align="center" gutterBottom>
                            Nota
                        </Typography>
                        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                            Este sitio es una prueba
                        </Typography>

                    </footer>
                    {/* End footer */}

                </div>

            </Router>
        </ProductContext.Provider>

    );
}

export default App;
