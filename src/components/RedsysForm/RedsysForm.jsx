import React from "react";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";



class RedsysForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            prod_id: 0,
            nombre: '',
            apellidos: '',
            submitted: false,
            response:[]
        };
        this.handleChangePostName = this.handleChangePostName.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({prod_id: this.props.product_id});
    }

    handleChangeName(event) {
        this.setState({nombre: event.target.value});
    }
    handleChangePostName(event) {
        this.setState({apellidos: event.target.value});
    }

    handleSubmit(event) {

        fetch((process.env.REACT_APP_API_DOMAIN + '/api/redsys'), {
            method: 'POST',
            body: JSON.stringify({
                prod_id: this.state.prod_id,
                nombre: this.state.nombre,
                apellidos: this.state.apellidos
            }),
        })
            .then(response => response.json())
            .then((JsonData) => {

                this.setState({response: JsonData});
                this.setState({submitted: true});

            })
            .catch((error => {
                console.error(error);
            }))

        event.preventDefault();
    }

    render() {
        if (this.state.submitted === true) {
            return <Redirect
                to={{
                    pathname: "/redsyscheckout",
                    state: { data: this.state.response }
                }}
            />

        }
        return (
            <form onSubmit={this.handleSubmit}>

                <TextField required
                           id="standard-basic"
                           label="Nombre"
                           value={this.state.nombre}
                           onChange={this.handleChangeName}
                />

                <TextField
                    required
                    id="standard-basic"
                    label="Apellidos"
                    value={this.state.apellidos}
                    onChange={this.handleChangePostName}
                />

                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    color="primary"
                    className={""}
                    alt=""
                    startIcon={<ShoppingCartIcon/>}
                >
                    Pago
                </Button>

                {/*<input type="submit" value="Submit" />*/}


            </form>
        );
    }
}

export default RedsysForm;