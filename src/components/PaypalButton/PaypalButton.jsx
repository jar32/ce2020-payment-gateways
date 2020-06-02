import React from 'react';
import Button from '@material-ui/core/Button';
import SyncIcon from '@material-ui/icons/Sync';
import SyncDisabledIcon from '@material-ui/icons/SyncDisabled';

class PaypalButton extends(React.Component){

    render() {
        return(
            <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">
                <input type="hidden" name="cmd" value="_xclick"/>
                {this.props.sync ? // Retorno auto?
                    <input type="hidden" name="business" value={process.env.REACT_APP_PAYPAL_EMAIL_2}/> // Si
                    :
                    <input type="hidden" name="business" value={process.env.REACT_APP_PAYPAL_EMAIL}/> // No
                }
                <input type="hidden" name="lc" value="ES"/>
                {/*<input type="hidden" name="button_subtype" value="services"/>*/}
                <input type="hidden" name="item_name" value={this.props.item_name}/>
                <input type="hidden" name="currency_code" value="EUR"/>
                <input type="hidden" name="amount" value={this.props.amount.toFixed(2)}/>
                {/*<input type="hidden" name="no_shipping" value="1"/>*/}
                {this.props.return
                    ? <input type="hidden" name="return" value={process.env.REACT_APP_DOMAIN + process.env.REACT_APP_PAYPAL_RETURN}/>
                    : ""
                }
                {this.props.cancel_return
                    ? <input type="hidden" name="cancel_return" value={process.env.REACT_APP_DOMAIN + process.env.REACT_APP_PAYPAL_CANCEL_RETURN}/>
                    : ""
                }

                {this.props.sync ?

                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        className={""}
                        alt="PayPal, la forma más segura y rápida de pagar en línea."
                        startIcon={<SyncIcon />}
                    >
                        Con retorno automatico
                    </Button>
                    :
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        className={""}
                        alt="PayPal, la forma más segura y rápida de pagar en línea."
                        startIcon={<SyncDisabledIcon />}
                    >
                        Sin retorno automatico
                    </Button>
                  }

            </form>
        )
    }
}

export default PaypalButton;