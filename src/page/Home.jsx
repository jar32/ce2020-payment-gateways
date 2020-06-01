import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ProductContext from "../context/ProductContext";
import ProductCard from "../components/ProductCard/ProductCard";
import Typography from "@material-ui/core/Typography";

class Home extends (React.Component){



    render() {



        const classes = this.props.classes;

        return(

            <Container className={classes.body} maxWidth="false">
                {/* Hero unit */}
                <Container maxWidth="sm" component="main" className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Circuito Pollos UMH
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" component="p">
                        Elige la categoría en la que quieres participar
                    </Typography>
                </Container>
                {/* End hero unit */}



                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <ProductContext.Consumer>
                        {cards =>   (
                            <Grid container spacing={4}>

                                {cards.map((card) => (
                                    <Grid item key={card['id']} xs={12} sm={6} md={4}>
                                        <ProductCard classes={classes} card={card}/>

                                    </Grid>
                                ))}

                            </Grid>
                        )}
                    </ProductContext.Consumer>
                </Container>

            </Container>
        )
    }
}

export default Home;