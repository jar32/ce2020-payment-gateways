import React from 'react';
import ProductContext from "../context/ProductContext";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router-dom";
import PaypalButton from "../components/PaypalButton/PaypalButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";



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
                        Paymanual contiene return y return_cancel, no retorna automáticamente.
                    </Typography>
                </Container>
                {/* End hero unit */}

                {/* Resumen producto */}
                <Container className={classes.cardGrid} maxWidth="md">

                    <ProductContext.Consumer>
                        {cards =>   (
                            <Paper elevation={2} >
                                <Grid container wrap="nowrap">

                                    <Grid item xs={12} sm={6} md={4}>

                                        <img width='100%' height={'100%'} src={cards[this.state.id].img} />

                                    </Grid>

                                    <Grid item xs={12} sm={6} md={4}>

                                        <h3>{cards[this.state.id].name}</h3>
                                        <p>{cards[this.state.id].Description}</p>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                            {cards[this.state.id].price}€
                                        </Typography>

                                    </Grid>

                                    <Grid item xs={12} sm={6} md={4}>
                                        <h3>Método 1</h3>
                                        {/* Sin retorno auto*/}
                                        <PaypalButton
                                            return={process.env.REACT_APP_PAYPAL_RETURN}
                                            cancel_return={process.env.REACT_APP_PAYPAL_CANCEL_RETURN}
                                            sync={false}
                                            amount={cards[this.state.id].price}
                                            item_name={cards[this.state.id].name}
                                        />
                                        {/* Con retorno auto*/}
                                        <h3>Método 2</h3>
                                        <PaypalButton sync={true}
                                                      amount={cards[this.state.id].price}
                                                      item_name={cards[this.state.id].name}
                                        />
                                    </Grid>

                                </Grid>
                            </Paper>
                        )}
                    </ProductContext.Consumer>

                </Container>
                {/* Fin Resumen producto */}

            </Container>


        )
    }
}

export default withRouter(Checkout);