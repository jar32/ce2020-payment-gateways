import React from "react";
import CancelIcon from '@material-ui/icons/Cancel';
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {Link} from "react-router-dom";
import Container from "@material-ui/core/Container";

class Cancel extends (React.Component){
    render() {

        return(

            <header className="App-header-cancel">
                <Container maxWidth="md">
                    <CancelIcon className="cancel-icon"/>
                    <h3>
                        LO SENTIMOS, SE HA PRODUCIDO UN ERROR EN EL PAGO.
                    </h3>
                    <p>
                        El pago ha sido cancelado y su transacción no ha finalizado. Por favor, Inténtelo de nuevo más tarde.
                    </p>
                    <Link className="App-link" to={'/'} >
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
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

export default Cancel;