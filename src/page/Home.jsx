import React from "react";
import PaypalButton from "../components/PaypalButton/PaypalButton";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Home extends (React.Component){



    render() {


        const useStyles = makeStyles((theme) => ({
            icon: {
                marginRight: theme.spacing(2),
            },

        }));
        const classes = this.props.classes;

        //const cards = [1, 2, 3];
        const cards = [
            {'id' : 1, 'name': 'Starter', 'price':25, 
            'Description': 'Simple service for beginners',
            'img': 'https://images.unsplash.com/photo-1495013034289-3664878e32f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1083&q=80'}, 
            {'id' : 2, 'name': 'Professional', 'price':50, 
            'Description': 'Complex service for professionals',
            'img': 'https://images.unsplash.com/photo-1566274360936-69fae8dc1d95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'},
            {'id' : 3, 'name': 'Premium', 
            'Description': 'Premium service for best', 'price':75, 
            'img': 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1082&q=80'}
        ];

        return(
            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card['id']} xs={12} sm={6} md={4}>
                            <Card className={classes.card['id']}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={card['img']}
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {card['name']}
                                    </Typography>
                                    <Typography>
                                        {card['Description']}
                                    </Typography>
                                    <div className={classes.cardPricing}>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                        ${card.price}
                                        </Typography>
                                        <Typography variant="h6" color="textSecondary">
                                        /mo
                                        </Typography>
                                    </div>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                <Link to="/checkout">Checkout</Link>
                                    <PaypalButton
                                        return={process.env.REACT_APP_PAYPAL_RETURN}
                                        cancel_return={process.env.REACT_APP_PAYPAL_CANCEL_RETURN}
                                        sync={false}
                                    />
                                    <PaypalButton sync={true}/>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

        )
    }
}

export default Home;