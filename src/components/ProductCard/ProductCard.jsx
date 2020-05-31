import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import {Link} from "react-router-dom";
import Card from "@material-ui/core/Card";
import React from "react";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


class ProductCard extends (React.Component){

    handleClick(e) {
        console.log(e);
    }

    render() {

        const classes = this.props.classes;
        return(
            <Card className={this.props.card['id']}>
                <CardMedia onClick={this.handleClick(this.context)}
                           className={classes.cardMedia}
                           image={this.props.card['img']}
                           title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.card['name']}
                    </Typography>
                    <Typography>
                        {this.props.card['Description']}
                    </Typography>
                    <div className={classes.cardPricing}>
                        <Typography component="h2" variant="h3" color="textPrimary">
                            {this.props.card.price}€
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                            /día
                        </Typography>
                    </div>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Link to={'/checkout/'+(this.props.card.id-1)} >
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        className={""}
                        alt="PayPal, la forma más segura y rápida de pagar en línea."
                        startIcon={<ShoppingCartIcon />}
                    >
                        Comprar
                    </Button>
                    </Link>
                </CardActions>
            </Card>
        )
    }
}

export default ProductCard;