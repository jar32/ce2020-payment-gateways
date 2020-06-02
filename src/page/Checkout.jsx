import React from 'react';
import ProductContext from "../context/ProductContext";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router-dom";
import PaypalButton from "../components/PaypalButton/PaypalButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ProductCard from "../components/ProductCard/ProductCard";
import Box from "@material-ui/core/Box";
import RedsysForm from "../components/RedsysForm/RedsysForm";




class Checkout extends(React.Component){


    constructor(props)
    {
        super(props);
        this.state = {id: 0}
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({id: id})
    }

    render(){

        const classes = this.props.classes;


        return(
            <Container className={classes.body} maxWidth="false">

                {/* Hero unit */}
                <Container maxWidth="sm" component="main" className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Checkout
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" component="p">
                        Selecciona un método de pago.
                    </Typography>
                </Container>
                {/* End hero unit */}

                {/* Resumen producto */}
                <Container className={classes.cardGrid} maxWidth="md">

                    <ProductContext.Consumer>
                        {cards =>   (
                            <div>

                                <Grid container spacing={4}>


                                    <Grid item key={"0"} xs={12} sm={12} md={4}>
                                        <ProductCard classes={classes} card={cards[this.state.id]} disable_link={true} />

                                    </Grid>

                                    <Grid item key={"1"} xs={12} sm={12} md={8}>
                                        <Paper elevation={2} >
                                            <Box component="span" m={1}>
                                            <Typography component="h6" variant="h6" color="textPrimary">
                                                Escoge un método de pago
                                            </Typography>
                                            </Box>
                                        </Paper>
                                        <ExpansionPanel>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography className={classes.heading}>
                                                    <img width={"80px"} src={"https://upload.wikimedia.org/wikipedia/commons/5/53/PayPal_2014_logo.svg"} />
                                                </Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>

                                                <Grid container wrap="nowrap" spacing={4}>
                                                    <Grid item xs={12} sm={6} md={6}>
                                                        {/* Sin retorno auto*/}
                                                        <PaypalButton
                                                            return={process.env.REACT_APP_PAYPAL_RETURN}
                                                            cancel_return={process.env.REACT_APP_PAYPAL_CANCEL_RETURN}
                                                            sync={false}
                                                            amount={cards[this.state.id].price}
                                                            item_name={cards[this.state.id].name}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={6}>
                                                        {/* Con retorno auto*/}

                                                        <PaypalButton sync={true}
                                                                      amount={cards[this.state.id].price}
                                                                      item_name={cards[this.state.id].name}
                                                        />

                                                    </Grid>
                                                </Grid>

                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                        <ExpansionPanel>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2a-content"
                                                id="panel2a-header"
                                            >
                                                <Typography className={classes.heading}>
                                                    <img width={"70px"} src={"https://betalmune.com/wp-content/uploads/2019/03/redsys-logo-1.png"} />
                                                </Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>

                                                <RedsysForm product_id={this.props.match.params.id}></RedsysForm>

                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>

                                    </Grid>

                                </Grid>


                            </div>
                        )}
                    </ProductContext.Consumer>

                </Container>
                {/* Fin Resumen producto */}

            </Container>


        )
    }
}

export default withRouter(Checkout);