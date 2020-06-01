import React from "react";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Container from "@material-ui/core/Container";

class ThankYouPage extends (React.Component){
    render() {

        //const classes = this.props.classes;

        return(

            <header className="App-header">
                <Container maxWidth="md">
                    <CheckCircleIcon className="check-icon "/>
                    <h3>
                        LA COMPRA SE HA REALIZADO CORRECTAMENTE. ¡MUCHAS GRACIAS POR SU CONFIANZA!
                    </h3>
                    <p>
                        Gracias por su pago. Su transacción ha finalizado y le hemos enviado un recibo
                        de su compra por correo electrónico. Puede acceder a su cuenta,
                        www.sandbox.paypal.com/es, para ver los detalles de esta transacción.
                    </p>

                    <Link className="App-link" to={'/'} >
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={""}
                            alt="PayPal, la forma más segura y rápida de pagar en línea."
                            endIcon={<ArrowForwardIosIcon className={'App-logo'}/>}
                        >
                            Terminar
                        </Button>
                    </Link>
                </Container>
            </header>
        )
    }
}

export default ThankYouPage;