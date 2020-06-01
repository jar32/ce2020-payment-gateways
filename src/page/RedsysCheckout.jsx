import React from "react";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

class RedsysCheckout extends (React.Component){

    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
    }

    componentDidMount() {
        this.setState({data: [this.props.location.state.data]});
    }

    render() {

        //const classes = this.props.classes;
        //console.log(this.props.location.state.data);
        //this.state.data = this.props.location.state.data;
        console.log(this.state.data);
        const aux = [this.props.location.state.data];

        return(
            <div>
            <header className="pb-3 road-bg App-header-generic">

                <Container maxWidth="md" className="">
                    <img className={"redsys-icon"} width={"100px"} src={"https://serv3.raiolanetworks.es/blog/wp-content/uploads/pasarelasdepagowoocommerce5.png"}/>

                    <h3>
                        NO DISPONEMOS DE CUENTA EN REDSYS.
                    </h3>
                    <p>
                        Estos son los parámetros que se han generado.
                    </p>

                    <Container maxWidth="md" className="ptb-1">

                    <TableContainer component={Paper}>
                        <Table className={''} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Atribute</TableCell>
                                    <TableCell align="right">Valor</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Object.keys(aux[0]).map((i, row) => (
                                    <TableRow key={{row}}>
                                        <TableCell component="th" scope="row">
                                            {i}
                                        </TableCell>
                                        <TableCell align="right">{aux[0][i]}</TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </Container>

                    <Link className="App-link" to={'/'} >
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={" mt-1"}
                            alt="PayPal, la forma más segura y rápida de pagar en línea."
                            endIcon={<ArrowForwardIosIcon className={'App-logo'}/>}
                        >
                            Terminar
                        </Button>
                    </Link>
                </Container>

            </header>



            </div>

        )
    }
}

export default RedsysCheckout;