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

class Home extends (React.Component){



    render() {


        const useStyles = makeStyles((theme) => ({
            icon: {
                marginRight: theme.spacing(2),
            },

        }));
        const classes = this.props.classes;

        const cards = [1, 2, 3];

        return(
            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe the content.
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.cardActions}>

                                    <PaypalButton
                                        return={process.env.REACT_APP_PAYPAL_RETURN}
                                        cancel_return={process.env.REACT_APP_PAYPAL_CANCEL_RETURN}
                                    />
                                    <PaypalButton/>
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